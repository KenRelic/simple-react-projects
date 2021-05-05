import React, { useState } from "react";
// import { Layout, Container, Header } from "../../components/layout";
import marked from "marked";
import "./markdown.css";

const Markdown = () => {
  const [markdown, setMarkdown] = useState("# hello");
  const [output, setOutput] = useState("");

  const handleConversion = (e) => {
    const value = e.target.value;
    // console.log(e.target.value);
    setMarkdown(value);
    console.log(marked(value));
    setOutput(marked(value));
  };
  return (
    <main className={"main"}>
      <h1 className={"title"}>Markdown Previewer</h1>
      <section className={"content-wrapper"}>
        <div className={"markdown"}>
          <p className={"sub-title"}>MARKDOWN</p>
          <textarea
            value={markdown}
            onInput={(e) => handleConversion(e)}
            className={"markdown-textarea"}></textarea>
        </div>
        <div className={"preview"}>
          <p className={"sub-title"}>PREVIEW</p>
          <div className={"preview-textarea"}>{marked(markdown)}</div>
        </div>
      </section>
    </main>
  );
};

export default Markdown;
