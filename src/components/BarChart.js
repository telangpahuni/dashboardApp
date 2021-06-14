import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { getData, getDataDough } from "./GetData";

const BarChart = () => {

  const [dataS, setDataS] = useState(null);

  useEffect(() => {
    // console.log(getDataDough());
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
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        },
      };
      setDataS(temp.chartData);
    });
  }, []);

  return (
    <Bar
      data={dataS}
      width="20"
      height="20"
      options={{
        maintainAspectRatio: true,
        responsive: true,
      }}
    />
  );
};
export default BarChart;
