import './chart.css'
import { Doughnut } from "react-chartjs-2";

const DoughChart = () => {
  const data = {
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        // circumference: 10,
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Red", "Yellow", "Blue"],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio:1,
    plugins:{
        legend: {
            // display:true,
            position: "bottom",
        },
    }
    // radius:100
  };
  return (
    <div className="card">
      <div className="doughnut-body card-body">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
export default DoughChart;
