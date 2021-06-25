import LineChart from "./LineChart";
import DoughChart from "./DoughChart";
function Chart() {
  return (
    <div className="container-fluid">
      <div className="chart-body row m-5">
        <div className="col-lg-7 col-md-7 col-12 ">


            <LineChart></LineChart>

        </div>
        <div className="col-lg-5 col-md-5 col-12">
            <div>
            <DoughChart></DoughChart>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
