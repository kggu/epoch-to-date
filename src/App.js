import React, { useState } from "react";
import DataTable from "./components/DataTable";
import CSVReader from "react-csv-reader";
import "./App.css";

const App = () => {
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [fileInfo, setFileInfo] = useState();

  const convertInput = () => {
    if (input) {
      // Copy instead of reference, so the original input doesn't get converted...
      let convert = JSON.parse(JSON.stringify(input));

      for (let i = 0; i < convert.length; i++) {
        convert[i][0] = new Date(convert[i][0] * 1000)
          .toUTCString()
          .replace(",", "");
      }

      setOutput(convert);
    }
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
              <code>{fileInfo?.name}</code>
            </p>
            <label htmlFor="upload_file" className="control-button">
              <span>
                <code>select file</code>
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
            <p className="control-button">
              <code>created by miikka k.</code>
            </p>
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
    </div>
  );
};

export default App;
