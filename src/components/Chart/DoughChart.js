import "./chart.css";
import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getDataDough } from "../../Services/GetData";
import ChartModal from '../../components/Modal/Modal';

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const DoughChart = () => {
  const [dataD, setData] = useState(null);
  useEffect(() => {
    getDataDough().then((val) => {
      const data = val;
      setData(data);
      console.log(val);
    });
  }, []);

  const data = {
    datasets: [
      {
        data: dataD,
        backgroundColor: ["rgb(172, 0, 255)", "rgb(9, 234, 225)"],
        // circumference: 10,
      },
    ],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["Compliant", "Non-Compliant"],
  };
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        // display:true,
        position: "bottom",
      },
    },
    // radius:100
  };
  if(dataD){
  return (
    <div className="pb-1">
      <div className="doughnutchart">
        <div className=" d-none d-md-block d-xl-block d-lg-block pr-0 ">
          <Doughnut data={data} options={options} />
        </div>
        <a data-toggle="modal" data-target="#doughnutModal">
          Overall Compliance Status
        </a>
      </div>
    <ChartModal id="doughnutModal" chart={<Doughnut data={data} options={options} />}></ChartModal>
    </div>
  )
  }
  else{
    return(
      <div className="pb-1">
      <div className="doughnutchart">
      <div className=" d-none d-md-block d-xl-block d-lg-block pr-0 ">
      <LoadingSpinner></LoadingSpinner>
        </div>
      
      </div>
      </div>
    )
  }
};

export default DoughChart;
