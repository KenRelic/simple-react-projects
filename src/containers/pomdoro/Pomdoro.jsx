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
    time: 25 * 60 * 1000,
    state: "IDLE",
    breakTime: 5 * 1000 * 60,
  });

  let countdown;

  const startPomdoro = () => {
    countdown = setInterval(() => {
      // console.log(appState);
      // startPomdoro;
      setAppState((prev) => {
        return {
          ...prev,
          time: prev.time - 1000,
        };
      });
      console.log("CALLING", appState);
    }, 1000);

    console.log(countdown);
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
    setAppState((prev) => {
      return {
        ...prev,
        state: "PAUSED",
      };
    });

    window.clearInterval(countdown);
  };

  useEffect(() => {
    // startPomdoro();
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
    // return () => {
    //   window.clearInterval(countdown);
    // };
  }, [appState.time]);

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
              {Math.floor(appState.time / 1000 / 60)}:
              {(appState.time / 1000) % 60}
            </h2>
            <h3 className={styles.currentState}>{appState.state}</h3>
            {appState.state === "IDLE" ? (
              <img
                src={playBtn}
                className={"control-btn"}
                width={40}
                onClick={startClock}
              />
            ) : (
              <img
                src={pauseBtn}
                onClick={pauseClock}
                className={"control-btn"}
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
            strokeWidth={5}
            style={{ width: "100%", height: "100%" }}
            percent={appState.time}
            format={() => ``}
            width={"80%"}
            // status="active"
          />
        </div>
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
