import React from "react";
import "./DataTable.css";

const DataTable = (props) => {
  const data = props?.data;
  
  return (
    <div className="root">
      <table className="table-root">
        <tr>
          {data && //Map table headers: 0, 1, 2 etc
            Object.keys(data[0]).map((value, index) => {
              return <th>{index}</th>;
            })}
        </tr>
        {data &&
          data.map((row, index) => {
            return (
              <tr>
                {row.map((value, index) => {
                  return <td>{value}</td>;
                })}
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default DataTable;
