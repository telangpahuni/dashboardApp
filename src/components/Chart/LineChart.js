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
    legend: {
      position: "bottom",
      display: true,
    },
    scales: {
      x: {
        ticks: {
          color: ["rgba(23,37,42,1)"],
        },
      },
      y: {
        ticks: {
          padding: 0,
          backdropPadding: 0,
          font: {
            family: "fantasy",
            size: 14,
          },
        },
      },
    },
  };
  return (
    <div className="card">
      <div className="card-body">
        <Line height="110" data={dataS} options={options} />
      </div>
    </div>
  );
};
export default LineChart;
