import React, { useState } from "react";
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

const Pomdoro = () => {
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
          <Canvas />
          <div className={styles.timerWrapper}>
            <h2 id={styles.timer}>17:59</h2>
            <h3 className={styles.currentState}>PAUSE</h3>
          </div>
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
