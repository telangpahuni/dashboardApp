import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ChartModal from '../../components/Modal/Modal'
import { getData } from "../../Services/GetData";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
  if(dataS){
  return (
    <div className='pb-1'>
      <div className="linechart text-right">
        <div className='d-none d-md-block d-xl-block d-lg-block'>

          <Line height="110" data={dataS} options={options} />

        </div>
        <a data-toggle="modal" data-target="#exampleModal">
          Statuswise Count..
        </a>
      </div>
      <ChartModal id="exampleModal" chart={<Line data={dataS} options={options} />}></ChartModal>
    </div>
  )}
  else{
    return (
      <div className='pb-1'>
        <div className="linechart">
          <div className='d-none d-md-block d-xl-block d-lg-block'>
            <LoadingSpinner></LoadingSpinner>
            </div>
            </div>
            </div>
    )
  }
};
export default LineChart;
