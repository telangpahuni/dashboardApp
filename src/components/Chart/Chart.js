import LineChart from "./LineChart";
import DoughChart from "./DoughChart";
function Chart() {
  return (
    <div className="container-fluid">
      <div className="row m-5">
        <div className="col-lg-8 col-12">
            <LineChart></LineChart>
        </div>
        <div className="col-lg-4 col-12 m-auto pb-5">
            <div>

            <DoughChart></DoughChart>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
