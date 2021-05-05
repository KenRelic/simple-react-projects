import React, { useState } from "react";

import * as styles from "./calc.module.css";

const Calculator = () => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);

  const handleCompute = () => {
    let inputVal = input.replace(/[÷]/gi, "/");
    inputVal = inputVal.replace(/[×]/gi, "*");
    inputVal = inputVal.replace(/[%]/gi, "/100");
    setOutput(eval(inputVal));
  };

  const getPercentage = () => {
    setInput();
  };

  const handleInput = (e) => {
    const lastValue = input[input.length - 1];
    const buttonValue = e.target.dataset.value;

    if (lastValue === "=") {
      setInput(output);
    }

    setInput((prev) => {
      const newValue = prev === 0 ? buttonValue : prev + buttonValue;
      return newValue;
    });

    if (buttonValue === "=") handleCompute();
  };

  const clearScreen = () => {
    setInput("");
    setOutput(0);
  };

  const handleClearInput = () => {
    setInput((prev) => {
      const newValue = prev.replace(/[\S]$/i, "");
      return newValue;
    });
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>React Calculator</h1>
      <section className={styles.calcBody}>
        <div className={styles.calcScreen}>
          <p className={styles.computation}>{input}</p>
          <p className={styles.calcOutput}>{output}</p>
        </div>
        <div className={styles.calcControls}></div>
        <div className={styles.buttons}>
          <button
            onClick={clearScreen}
            className={`${styles.button} ${styles.actionBtn}`}>
            AC
          </button>
          <button
            onClick={handleClearInput}
            className={`${styles.button} ${styles.actionBtn}`}>
            {" "}
            {"⇦"}
          </button>
          <button
            data-value={"%"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button} ${styles.actionBtn}`}>
            {" "}
            %{" "}
          </button>
          <button
            data-value={"÷"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button} ${styles.actionBtn}`}>
            {" "}
            &divide;{" "}
          </button>
          <button
            data-value={"7"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            7{" "}
          </button>
          <button
            data-value={"8"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            8{" "}
          </button>
          <button
            data-value={"9"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            9{" "}
          </button>
          <button
            data-value={"×"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button} ${styles.actionBtn}`}>
            {" "}
            ×{" "}
          </button>
          <button
            data-value={"4"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            4{" "}
          </button>
          <button
            data-value={"5"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            5{" "}
          </button>
          <button
            data-value={"6"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            6{" "}
          </button>
          <button
            data-value={"-"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button} ${styles.actionBtn}`}>
            {" "}
            -{" "}
          </button>
          <button
            data-value={"1"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            1{" "}
          </button>
          <button
            data-value={"2"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            2{" "}
          </button>
          <button
            data-value={"3"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            3{" "}
          </button>
          <button
            data-value={"+"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button} ${styles.actionBtn}`}>
            {" "}
            +{" "}
          </button>
          <button
            data-value={"0"}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            0{" "}
          </button>
          <button
            data-value={"."}
            onClick={(e) => handleInput(e)}
            className={`${styles.button}`}>
            {" "}
            .{" "}
          </button>
          <button
            data-value={"="}
            onClick={(e) => handleInput(e)}
            className={`${styles.button} ${styles.equalBtn}`}>
            {" "}
            ={" "}
          </button>
        </div>
      </section>
    </main>
  );
};

export default Calculator;
