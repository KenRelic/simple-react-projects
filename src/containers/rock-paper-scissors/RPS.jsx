import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import axios from "axios";
import { Button, Tooltip, Progress } from "antd";
// STYLES
import {
  Layout,
  Container,
  Header,
  CircularCard,
  Footer,
  CardFooter,
} from "../../components/layout.js";
import { Switch } from "antd";

import styled from "@emotion/styled";
import rps from "../../images/images-rps/logo.svg";
import rps2 from "../../images/images-rps/logo-bonus.svg";
import rock from "../../images/images-rps/icon-rock.svg";
import paper from "../../images/images-rps/icon-paper.svg";
import scissors from "../../images/images-rps/icon-scissors.svg";
import lizard from "../../images/images-rps/icon-lizard.svg";
import spock from "../../images/images-rps/icon-spock.svg";

import rules from "../../images/images-rps/image-rules.svg";
import rulesBonus from "../../images/images-rps/image-rules-bonus.svg";
import close from "../../images/images-rps/icon-close.svg";
import triangle from "../../images/images-rps/bg-triangle.svg";
import pentagon from "../../images/images-rps/bg-pentagon.svg";

const RockPaperScissors = () => {
  const [score, setScore] = useState([0, 0]);
  const [type, setType] = useState("regular");

  return (
    <Container id="quote-box">
      <Header>
        <ScoreBoard score={score} />
      </Header>
      <Layout>
        <TilesWrapper bg={gameProps.lines[1]} type="advanced">
          <TileGroups type="advanced" />
          <img className="line" src={pentagon} />
        </TilesWrapper>
      </Layout>
      <Switch />
      <Footer>
        <small>Made with 💚💙 by KenChi</small>
      </Footer>
    </Container>
  );
};

export default RockPaperScissors;

export const ScoreBoard = ({ score }) => {
  return (
    <StyledTitleCard>
      <img src={rps} alt="bg" />
      <ShowCard
        type="score"
        score={score}
        title="SCORE"
        number="2"
        tags={["YOU", "CPU"]}
      />
    </StyledTitleCard>
  );
};

export const StyledTitleCard = styled.div`
  padding: 1.5rem;
  border: 1px solid #c2c2c2ac;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 35%;
  }
`;

export const ShowCard = ({ type, title, number, tags, score }) => {
  if (type === "score") {
    return (
      <SmallCard>
        <p>{title}</p>
        <div className="score-section">
          <h2>
            {score[0]} <span>{tags[0]}</span>{" "}
          </h2>
          {number > 1 ? (
            <>
              <hr />{" "}
              <h2>
                {score[1]}
                <span>{tags[1]}</span>
              </h2>
            </>
          ) : (
            ""
          )}
        </div>
      </SmallCard>
    );
  }
};

export const SmallCard = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  /* height: 120px; */
  hr {
    border: none;
    height: 30px;
    width: 2px;
    background-color: grey;
    margin: 5px;
  }

  p {
    font-size: 0.8rem !important;
    text-transform: uppercase;
    color: #444 !important;
  }

  h2 {
    font-weight: bold;
    font-size: 3.5rem;
    color: #222 !important;
    line-height: 1;
  }

  span {
    font-weight: normal;
    font-size: 0.7rem;
    color: #555 !important;
    display: block;
  }
  .score-section {
    /* width: 100%; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    overflow: hidden;
  }
`;

const gameProps = {
  bg: [rps, rps2],
  lines: [triangle, pentagon],
  tiles: [
    {
      id: 1,
      name: "rock",
      icon: rock,
      color: "hsl(349, 71%, 52%), hsl(349, 70%, 56%)",
      shadow: "hsl(349, 71%, 42%)",
      position: [
        ["2 / 3", "1 / 2"],
        ["3 / 4", "1 / 2"],
      ],
      beat: ["lizard", "scissors"],
    },
    {
      id: 2,
      name: "paper",
      icon: paper,
      color: "hsl(230, 89%, 62%), hsl(230, 89%, 65%)",
      shadow: "hsl(230, 89%, 42%)",
      position: [
        ["3 / 4", "2 / 3"],
        ["5 / 6", "3 / 4"],
      ],
      beat: ["lizard", "scissors"],
    },
    {
      id: 3,
      name: "scissors",
      icon: scissors,
      color: "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
      shadow: "hsl(40, 84%, 42%)",
      position: [
        ["1 / 2", "2 / 3"],
        ["4 / 5", "5 / 6"],
      ],
      beat: ["paper", "lizard"],
    },
    {
      id: 4,
      name: "spock",
      icon: spock,
      color: "hsl(189, 59%, 53%), hsl(189, 58%, 57%)",
      shadow: "hsl(189, 58%, 42%)",
      position: [
        ["0", "0"],
        ["2 / 3", "5 / 6"],
      ],
      beat: ["scissors", "rock"],
    },
    {
      id: 5,
      name: "lizard",
      icon: lizard,
      color: "hsl(261, 73%, 60%), hsl(261, 72%, 63%)",
      shadow: "hsl(261, 72%, 42%)",
      position: [
        ["0", "0"],
        ["1 / 2", "3 / 4"],
      ],
      beat: ["spock", "paper"],
    },
  ],
};

export const StyledTile = styled.div`
  min-width: 110px;
  min-height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) =>
    props.color ? `linear-gradient(${props.color})` : "black"};
  box-shadow: 0 8px 0 ${(props) => (props.shadow ? props.shadow : "black")};
  grid-column: ${(props) => (props.column ? props.column : 0)};
  grid-row: ${(props) => (props.row ? props.row : 0)};
  margin: ${(props) =>
    props.id === 4
      ? "30px 30px 0 0"
      : props.type === "advanced" && props.id === 3
      ? "30px 0 0 30px"
      : 0};
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: inset 0 7px 0 #d8d8d8;
  }
`;

export const Tile = ({ id, name, icon, color, shadow, row, column, type }) => {
  return (
    <StyledTile color={color} shadow={shadow} column={column} row={row} id={id}>
      <div>
        <img src={icon} alt={"icon-" + name} />
      </div>
    </StyledTile>
  );
};

export const TileGroups = ({ type }) => {
  let tiles = gameProps.tiles;
  let firstThree = tiles.filter((tile) => tile.id <= 3);
  if (type === "regular") {
    return firstThree.map((tile) => (
      <Tile
        id={tile.id}
        icon={tile.icon}
        color={tile.color}
        shadow={tile.shadow}
        column={tile.position[0][0]}
        row={tile.position[0][1]}
        type="regular"
      />
    ));
  } else {
    return tiles.map((tile) => (
      <Tile
        id={tile.id}
        icon={tile.icon}
        color={tile.color}
        shadow={tile.shadow}
        column={tile.position[1][0]}
        row={tile.position[1][1]}
        type="advanced"
      />
    ));
  }
};

export const TilesWrapper = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  max-height: 600px;
  max-width: 600px;
  /* background-image: ${(props) => (props.bg ? `url(${props.bg})` : "")}; */
  background-position: -20px 50px;
  background-repeat: no-repeat;
  background-size: contain;

  grid-template-columns: ${(props) =>
    props.type === "advanced" ? `repeat(5, 65px)` : `repeat(3, 65px)`};
  grid-template-rows: ${(props) =>
    props.type === "advanced" ? `repeat(5, 65px)` : `auto`};
  align-content: center;
  justify-items: center;

  .line {
    z-index: -1;
    grid-column: 1/6;
    grid-row: 1/6;
    margin-top: 40px;
  }
`;
