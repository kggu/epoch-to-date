import React, { useState, useEffect } from "react";
import CSVReader from "react-csv-reader";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState();
  const [input, setInput] = useState();
  const [converted, setConverted] = useState();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const convertInput = () => {
    setConverted(input);
  };

  const copyToClipboard = () => {
    console.log("Copy to clipboard");
  };

  useEffect(() => {
    console.log("INPUT: ");
    console.log(input);
    console.log(JSON.stringify(input));
  }, [input]);

  return (
    <div className="container">
      <p>
        <code>unix epoch {"->"} timestamp</code>
      </p>
      <div className="controls">
        <div className="input-control">
          <div className="input-header">
            <p>
              <code>original |</code>
            </p>
            <p>
              <code>index:</code>
            </p>
            <input
              type="text"
              style={{ width: "2em", border: "2px solid #979797" }}
            ></input>
            <label htmlFor="upload_file" className="file-upload-button">
              <span>
                <code>select from file</code>
              </span>
            </label>
          </div>

          <textarea
            onChange={handleInputChange}
            type="text"
            className="input-field"
            value={input}
            readOnly
          ></textarea>
        </div>
        <div className="input-control">
          <div className="input-header">
            <p>
              <code>converted |</code>
            </p>
            <button onClick={copyToClipboard} className="file-upload-button">
              <code>copy to clipboard</code>
            </button>
          </div>
          <textarea
            type="text"
            className="input-field"
            value={converted}
            readOnly
          ></textarea>
        </div>
      </div>
      <button
        disabled={!input}
        onClick={convertInput}
        className="convert-button"
      >
        <code>convert</code>
      </button>
      <CSVReader
        inputId="upload_file"
        inputStyle={{ display: "none" }}
        onFileLoaded={(data, fileInfo) => setInput(data)}
      />
    </div>
  );
};

export default App;
