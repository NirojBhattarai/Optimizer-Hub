import React, { useState } from "react";

export default function Wordcounter() {
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

  return (
    <div className="flex justify-center bg-white py-4">
      <div className="bg-white text-white p-6 w-4/5 md:w-11/12">
        <h2 className="text-blue-600 font-bold text-2xl mb-4">
          Enter your text here:
        </h2>

        <textarea
          className="form-control w-full p-4 text-lg text-black bg-gray-200 border-2 border-gray-600 rounded-md"
          id="TextArea"
          onChange={handle_Onchange}
          value={text}
          rows="8"
          placeholder="Enter your text here"
        ></textarea>

        <div className="flex flex-wrap justify-between mt-4">
          <button
            className="btn btn-primary mx-1 my-1 bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded"
            onClick={handle_Upclick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1 bg-blue-600 text-white hover:bg-blue-500 py-2 px-4 rounded"
            onClick={handle_Lowclick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-success mx-1 my-1 bg-green-600 text-white hover:bg-green-500 py-2 px-4 rounded"
            onClick={handle_OnCopy}
          >
            Copy
          </button>
          <button
            className="btn btn-warning mx-1 my-1 bg-yellow-500 text-white hover:bg-yellow-400 py-2 px-4 rounded"
            onClick={handle_OnExtraSpace}
          >
            Remove Extra Space
          </button>
          <button
            className="btn btn-danger mx-1 my-1 bg-red-600 text-white hover:bg-red-500 py-2 px-4 rounded"
            onClick={handle_Onclear}
          >
            Clear
          </button>
          <button
            className="btn btn-dark mx-1 my-1 bg-gray-800 text-white hover:bg-gray-700 py-2 px-4 rounded"
            onClick={handle_Oncapitalization}
          >
            Capitalization
          </button>
        </div>

        <div className="mt-6">
          <h2 className="text-blue-600 font-bold text-2xl">Text Analysis:</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center bg-gray-700 p-4 rounded-md border border-white">
              <h4 className="font-bold">Characters:</h4>
              <span className="text-green-400 font-bold">
                {text.replace(/\s/g, "").length}
              </span>
            </div>
            <div className="text-center bg-gray-700 p-4 rounded-md border border-white">
              <h4 className="font-bold">Words:</h4>
              <span className="text-green-400 font-bold">
                {
                  text.split(/\s+/).filter((element) => element.length !== 0)
                    .length
                }
              </span>
            </div>
            <div className="text-center bg-gray-700 p-4 rounded-md border border-white">
              <h4 className="font-bold">Time required to read:</h4>
              <span className="text-green-400 font-bold">
                {(0.08 * text.length).toFixed(2)} minutes in average
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
