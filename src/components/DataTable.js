import React from "react";
import "./DataTable.css";

const DataTable = (props) => {
  const data = props?.data;

  return (
    <div className="root">
      <table className="table-root">
        <thead>
          <tr>
            {data && //Map table headers: 0, 1, 2 etc
              Object.keys(data[0]).map((value, index) => {
                return <th>{index}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => {
              return (
                <tr>
                  {row.map((value, index) => {
                    if (index + 1 === row.length) {
                      return <td>{value}</td>;
                    }
                    return <td>{value},</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
