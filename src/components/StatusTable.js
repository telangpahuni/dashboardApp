import "bootstrap/dist/css/bootstrap.min.css";
import * as Table from "react-bootstrap";
import tableData from "./tableData.csv";

import { useState } from "react";
import { useEffect } from "react";
// import { useTable } from "react-bootstrap/Table";

const StatusTable = () => {
  const [len, setLen] = useState();
  const [data, setData] = useState();
  const [heading, setHead] = useState();
  const [tableLen, setTable] = useState();
  const ab = [];
  async function statusD() {
    const t = await fetch(tableData);
    const d = await t.text();
    const tD = d.split("\n");
    var count =0;
    for (var i = 0; i < tD.length; i++) {
      const tData = tD[i].split(",");
      count += 1;
      ab.push(tData);
    }
    const index = ab[0].length;
    setTable(count-2);
    return [ab, index];
  }

  useEffect(() => {
    statusD().then((val) => {
        setHead(val[0][0]);
        setLen(val[1]);
        const val1 = val[0].shift();
        setData(val[0]);
    });
    return (
        data
    )
  }, []);
  return (
      <div>
        <Table.Table responsive>
          <thead>
            <tr>
              {Array.from({ length: len }).map((_, index) => (
                <th key={index}>{heading[index]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {Array.from({ length: tableLen+1  }).map((_, index) => (
                <tr key={index}>{
                    Array.from({ length: len  }).map((_, index1) => (
                        <td key={index1}>{data[index][index1]}</td>
                    )  
                )}</tr>
              ))}
          </tbody>
        </Table.Table>
      </div>
    )
};
export default StatusTable;
