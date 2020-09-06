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

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    console.log("INPUT: ");
    console.log(input);
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
            <input type="text" style={{ width: "2em" }}></input>
            <button className="input-header-button">
              <code>select from file</code>
            </button>
          </div>

          <textarea
            onChange={handleInputChange}
            type="text"
            className="input-field"
            readOnly
          >
            {input}
          </textarea>
        </div>
        <div className="input-control">
          <div className="input-header">
            <p>
              <code>converted |</code>
            </p>
            <button className="input-header-button">
              <code>copy to clipboard</code>
            </button>
          </div>
          <textarea type="text" className="input-field"></textarea>
        </div>
      </div>
      <button disabled={!input} className="convert-button">
        <code>convert</code>
      </button>
      <CSVReader onFileLoaded={(data, fileInfo) => setInput(data)} />
    </div>
  );
};

export default App;
