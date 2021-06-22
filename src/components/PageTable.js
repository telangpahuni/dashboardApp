import React from "react";
import { MDBDataTableV5 } from 'mdbreact'
import { useState, useEffect } from "react";

import { dataTable } from "./DataTable";

function PageTable() {
  const [len, setLen] = useState(0);
  const [heading, setHeading] = useState([]);
  const [tableLen, settableLen] = useState(0);
  const [data, setData] = useState(Array < [] > []);

  useEffect(() => {
    let isSubscribed = true;
    dataTable().then((val) => {
      console.log(val);
      if (isSubscribed) {
        setLen(val.len);
        setHeading(val.heading);
        settableLen(val.tablelen);
        setData(val.dataR);
      }
    });
    return () => (isSubscribed = false);
  }, []);
   
  if (data) {
      const arr = [];
      data.forEach((val)=>{
          const ABC={}
          heading.forEach((v,index)=>{
              ABC[v] = val[index]
            })
            arr.push(ABC);
            
        })
        const datatable={
            columns: [
                {
                  label: heading[0],
                  field: heading[0],
                  width: 150,
                  attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                  },
                },
                {
                  label: heading[1],
                  field: heading[1],
                  width: 270,
                },
                {
                  label: heading[2],
                  field: heading[2],
                  width: 200,
                },
                {
                  label: heading[3],
                  field: heading[3],
                  width: 100,
                },
                {
                  label: heading[4],
                  field: heading[4],
                  sort: 'disabled',
                  width: 150,
                },
                {
                  label: heading[5],
                  field: heading[5],
                  sort: 'disabled',
                  width: 100,
                },
              ],
            rows: arr ,
          };
    return (
      <MDBDataTableV5
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={datatable}
        materialSearch
      />
    );
  } else {
    return <h1>still loading</h1>;
  }
}

export default PageTable
