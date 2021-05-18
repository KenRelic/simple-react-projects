import React, { useEffect, useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import axios from "axios";
import { Button, Tooltip, Progress } from "antd";
import { TwitterCircleFilled } from "@ant-design/icons";
import quoteAPI from "../../api/api";
// STYLES
import {
  Layout,
  Container,
  Header,
  CircularCard,
  Footer,
  CardFooter,
} from "../../components/layout.js";
import * as styles from "./pomdoro.module.css";
import playBtn from "./../../images/images-rps/play-btn.svg";
import pauseBtn from "./../../images/images-rps/pause-btn.svg";

const Pomdoro = () => {
  const [appState, setAppState] = React.useState({
    // time: 25 * 60 * 1000,
    totalTime: 60000,
    state: "IDLE",
    breakTime: 5 * 1000 * 60,
  });
  const [count, setCount] = React.useState(60000);

  let countdown;

  function countTime(time) {
    console.log(time);
    if (time < 0) {
      setCount(0);
      return window.clearInterval(countdown);
    } else {
      setCount((time) => time - 1000);
      return countTime(time - 1000);
    }
  }

  const startPomdoro = () => {
    // countdown = setInterval(() => {
    //   // console.log(appState);
    //   // startPomdoro;
    //   // setAppState((prev) => {
    //   //   return {
    //   //     ...prev,
    //   //     time: prev.time - 1000,
    //   //   };
    //   // });
    //   setCount(count - 1000);

    //   console.log("CALLING", count);
    // }, 1000);

    // console.log(countdown);
    // window.clearInterval(countdown)
    console.log("COUNT STARTED", count);

    setInterval(() => {
      countTime(count);
    }, 1000);
  };

  const startClock = () => {
    // setAppState({ ...appState, state: "PLAYING" });
    setAppState((prev) => {
      return {
        ...prev,
        state: "PLAYING",
      };
    });
    startPomdoro();
  };

  const pauseClock = () => {
    // setAppState({ ...appState, state: "PAUSED" });s
    console.log(appState);
    setAppState((prev) => {
      return {
        ...prev,
        state: "PAUSED",
      };
    });
    clearInterval(countdown);
  };

  useEffect(() => {
    // if (appState.state === "PLAYING") {
    //   startPomdoro();
    //   return () => {
    //     window.clearInterval(countdown);
    //   };
    // }
    // const countdown = setInterval(() => {
    //   // console.log(appState);
    //   // startPomdoro;
    //   setAppState((prev) => {
    //     return {
    //       ...prev,
    //       time: appState.time - 1000,
    //     };
    //   });
    // }, 1000);

    return () => {
      if (appState.state === "PAUSED") {
        console.log(appState);
        clearInterval(countdown);
      }
    };
  }, [count, appState.time, pauseClock, appState.state]);

  return (
    <div id={styles.layout}>
      <div id={styles.main}>
        <h1 id={styles.title}>Pomdoro</h1>
        <div className={styles.states}>
          <div className={styles.statesBg}></div>
          <button className={styles.btn1}>pomdoro</button>
          <button className={styles.btn2}>short break</button>
          <button className={styles.btn3}>long break</button>
        </div>
        <div className={styles.canvasWrapper}>
          <div className={styles.timerWrapper}>
            <h2 id={styles.timer}>
              {Math.floor(count / 1000)}:{(count / 1000) % 60}
            </h2>
            <h3 className={styles.currentState}>{appState.state}</h3>
            {appState.state === "IDLE" || appState.state === "PAUSED" ? (
              <img
                src={playBtn}
                className={styles.controlBtn}
                width={40}
                onClick={startClock}
              />
            ) : (
              <img
                src={pauseBtn}
                onClick={pauseClock}
                className={styles.controlBtn}
                width={40}
              />
            )}
          </div>
          <Progress
            className={styles.progressBar}
            type="circle"
            strokeColor={{
              "0%": "tomato",
              "100%": "orange",
            }}
            strokeWidth={3}
            style={{ width: "100%", height: "100%" }}
            percent={100 - (count / appState.totalTime) * 100}
            format={() => ``}
            width={"80%"}
            // status="active"
          />
        </div>

        <div className={styles.settings}>⚙</div>
      </div>
    </div>
    // <Container id="quote-box">
    //   <Header>
    //     <h1>Pomdoro</h1>
    //   </Header>
    //   <Layout>
    //     <CircularCard>
    //       <Progress
    //         type="circle"
    //         strokeColor={{
    //           "0%": "#108ee9",
    //           "100%": "#87d068",
    //         }}
    //         strokeWidth={7}
    //         style={{ width: "100%", height: "100%" }}
    //         percent={50}
    //         width={270}
    //         status="active"
    //       />
    //     </CircularCard>
    //   </Layout>
    //   <Footer>
    //     <small>Made with 💚💙 by KenChi</small>
    //   </Footer>
    // </Container>
  );
};

export default Pomdoro;
