import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { getData } from "../../Services/GetData";

const LineChart = () => {
  const [dataS, setDataS] = useState(null);
  useEffect(() => {
    getData().then((val) => {
      const x = val;
      const y = x[0];
      const z = x[1];
      const temp = {
        chartData: {
          labels: y,
          datasets: [
            {
              label: "Count of the status",
              data: z,
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: ["rgb(54, 162, 235)", "rgb(153, 102, 255)"],
              borderWidth: 1,
            },
          ],
        },
      };
      setDataS(temp.chartData);
    });
  }, []);

  const options = {
    grouped: true,
    maintainAspectRatio: true,
    responsive: true,
    alignToPixels: true,
    scales: {
      x: {
        ticks: {
          color: ["rgba(23,37,42,1)"],
        },
      },
      y: {
        ticks: {
          font:{
            size:14,
          }
        },
      },
    },
  };
  return (
    <div className='pb-1'>
      <div className="linechart">
        <div className='d-none d-md-block d-xl-block d-lg-block'>

          <Line height="110" data={dataS} options={options} />

        </div>
        <a data-toggle="modal" data-target="#exampleModal">
          Statuswise Count..
        </a>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tab-index="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Count per Status
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
              <Line data={dataS} options={options} />
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
export default LineChart;
