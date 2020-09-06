import React, { useState, useEffect } from "react";
import DataTable from "./components/DataTable";
import CSVReader from "react-csv-reader";
import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [fileInfo, setFileInfo] = useState();

  const convertInput = () => {
    if (input) {
      console.log("index: " + index);
      let convert = Object.create(input);

      for (let i = 0; i < convert.length; i++) {
        convert[i][0] = new Date(convert[i][0] * 1000).toLocaleString();
      }

      setOutput(convert);
    }
  };

  const copyToClipboard = () => {
    console.log("Copy to clipboard");
  };

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
              value={index}
              onChange={(e) => setIndex(e.target.value)}
              className="index-input"
            ></input>
            <label htmlFor="upload_file" className="file-upload-button">
              <span>
                <code>select from file</code>
              </span>
            </label>
          </div>

          <div className="input-field">
            <DataTable data={input} />
          </div>
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
          <div className="input-field">
            <DataTable data={output} />
          </div>
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
        onFileLoaded={(data, fileInfo) => {
          setInput(data);
          setFileInfo(fileInfo);
        }}
      />
      <code>{JSON.stringify(fileInfo)}</code>
    </div>
  );
};

export default App;
