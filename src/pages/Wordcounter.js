import React, { useState } from "react";
import "./Wordcounter.css";

export default function Wordcounter(props) {
  const handle_Upclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handle_Lowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handle_Onclear = () => {
    setText("");
  };

  const handle_OnCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handle_OnExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handle_Onchange = (event) => {
    setText(event.target.value);
  };

  const handle_Oncapitalization = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  };

  const [text, setText] = useState("");

  let styleTextArea = {
    border: "2px solid black",
  };

  let styleTextAnalysis = {
    marginTop: "1rem",
    fontWeight: "bold",
  };

  return (
    <div className="main-container">
      <div className="element-container">
        <h2 style={{ color: "green", fontWeight: "bold", fontSize: "35px" }}>
          Enter your text here :
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            id="TextArea"
            onChange={handle_Onchange}
            value={text}
            rows="8"
            style={styleTextArea}
            placeholder="Enter your text here"
          ></textarea>
        </div>
        <div className="buttons">
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handle_Upclick}
            id="touppercase"
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            onClick={handle_Lowclick}
            id="tolowercase"
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-success mx-1 my-1"
            onClick={handle_OnCopy}
            id="Copy"
          >
            Copy
          </button>

          <button
            className="btn btn-warning mx-1 my-1"
            onClick={handle_OnExtraSpace}
            id="Extraspace"
          >
            Remove Extra Space
          </button>

          <button
            className="btn btn-danger mx-1 my-1"
            onClick={handle_Onclear}
            id="Clear"
          >
            Clear
          </button>

          <button
            className="btn btn-dark mx-1 my-1"
            onClick={handle_Oncapitalization}
            id="Clear"
          >
            Capitilization
          </button>
        </div>

        <div style={styleTextAnalysis}>
          <h2 style={{ color: "green", fontWeight: "bold", fontSize: "35px" }}>
            Text Analysis :
          </h2>
          <span
            style={{
              textAlign: "center",
              margin: "1rem",
              display: "grid",
              justifyContent: "center",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            {" "}
            <h4 style={{ marginTop: "2rem", fontWeight: "bold" }}>
              Characters:
            </h4>
            <span className="character-style">
              {text.replace(/\s/g, "").length}
            </span>{" "}
            <h4 style={{ marginTop: "2rem", fontWeight: "bold" }}>Words:</h4>
            <span className="word-style">
              {
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
            </span>
            <h4 style={{ marginTop: "2rem", fontWeight: "bold" }}>
              Time required to read:
            </h4>{" "}
            <span className="time-style">
              {(0.08 * text.length).toFixed(2)} minutes in average (not
              approximately)
            </span>
          </span>
        </div>

        <div>
          <h2 style={{ color: "green", fontWeight: "bold", fontSize: "35px" }}>
            Text Summary :
          </h2>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Click here to preview
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
