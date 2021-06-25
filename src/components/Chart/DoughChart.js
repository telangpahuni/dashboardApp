import './chart.css';
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {getDataDough} from "../../Services/GetData";


const DoughChart = () => {
  const [dataD,setData] = useState(null);
    useEffect(() => {
      getDataDough().then((val)=>{
        const data = val;
        setData(data);
        console.log(val);
      })
    }, [])
  
  const data = {
    datasets: [
      {
        data: dataD,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
        ],
        // circumference: 10,
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Compliant", "Non-Compliant"],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio:2,
    plugins:{
        legend: {
            // display:true,
            position: "bottom",
        },
    }
    // radius:100
  };
  return (
    <div>
      <div className="doughnutchart">
        <Doughnut
          data={data}
          options={options}
        />
      <a
            data-toggle="modal"
            data-target="#doughnutModal"
          >
            Show..
          </a>
          </div>
     <div
        className="modal fade"
        id="doughnutModal"
        tab-index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                 Splunk status
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <Doughnut
          data={data}
          options={options}
        />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoughChart;
