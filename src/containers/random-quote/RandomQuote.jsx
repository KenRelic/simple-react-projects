import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
import axios from "axios";
import { Button, Tooltip } from "antd";
import { TwitterCircleFilled } from "@ant-design/icons";
import quoteAPI from "../../api/api";
// STYLES
import {
  Layout,
  Container,
  Header,
  Card,
  Footer,
  CardFooter,
} from "../../components/layout.js";

const RandomQuote = () => {
  const [index, setIndex] = React.useState(0);
  const [colorIndex, setColorIndex] = React.useState(0);
  const [tweetLink, setTweetLink] = React.useState(
    "http://twitter.com/intent/tweet?text="
  );

  const [quotes, setQuotes] = React.useState([
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
  ]);

  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#4c5197",
    "#000000",
  ];

  const handleNext = () => {
    if (index !== quotes.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
    if (colorIndex !== colors.length - 1) {
      setColorIndex((prev) => prev + 1);
    } else {
      setColorIndex(0);
    }
  };

  const fetchQuotes = async () => {
    const res = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    setQuotes(res.data.quotes);
  };

  React.useEffect(() => {
    //fetch quotes
    fetchQuotes();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        transition: "all 0.3s ease",
        height: "100%",
        backgroundColor: colors[colorIndex],
      }}>
      <Container>
        <Header>
          <h1>Random Quotes</h1>
        </Header>
        <Layout>
          <Card color={colors[colorIndex]}>
            <div>
              <h2>
                <span className="quote-marks">"</span> {quotes[index].quote}
                <span className="quote-marks">"</span>
                <hr />
              </h2>
              <p className="author">{quotes[index].author}</p>
            </div>
            <CardFooter color={colors[colorIndex]}>
              <a
                href={`http://twitter.com/intent/tweet?text="${quotes[index].quote}" -- ${quotes[index].author} `}
                target="_blank">
                {" "}
                {<TwitterCircleFilled />}
              </a>{" "}
              <Button type="primary" shape="round" onClick={handleNext}>
                Next Quote
              </Button>
            </CardFooter>
          </Card>
        </Layout>
        <Footer>
          <small>Made with 💚💙 by KenChi</small>
        </Footer>
      </Container>
    </div>
  );
};

export default RandomQuote;
