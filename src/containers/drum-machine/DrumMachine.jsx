import React from "react";

import "./drum-machine.css";
import { drumData } from "./data";

const DrumMachine = () => {
  const kitRef = React.useRef(null);
  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  React.useEffect(() => {
    const getSound = (e) => {
      const keyData = drumData.find(
        (data) => data.keyTrigger === e.key.toUpperCase()
      );
      if (keyData) playSound(keyData.url);
    };
    window.addEventListener("keydown", getSound);

    return () => {
      window.removeEventListener("keydown", getSound);
    };
  }, []);

  return (
    <main ref={kitRef}>
      <h1 className={"title"}>DrumKit 🥁</h1>;
      <p className={"sub-title"}>
        Press the key on your keyboard or tap (on mobile)
      </p>
      <div className={"drum-pad-wrapper"}>
        {drumData.map((data, index) => (
          <div
            key={index + data.id}
            className={"drum-pad"}
            onClick={() => playSound(data.url)}>
            <span className={"pad-key"}>{data.keyTrigger}</span>
          </div>
        ))}
      </div>
      <footer>
        <small>Made with 💚💙 by KenChi</small>
      </footer>
    </main>
  );
};

export default DrumMachine;
