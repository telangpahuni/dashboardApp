import "./App.css";
import Chart from "./components/Chart/Chart";
import Header from "./components/Header/Header";
import PageTable from "./components/Table/PageTable";
import SidePanel from "./components/SidePanel/SidePanel";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <>
      <Header />
      <div className="page-body row mt-5">
        <div className="side-panel col-lg-2 d-none d-xl-block d-lg-block pr-0 ">
          <SidePanel />
        </div>
        <div className="col-lg-10">
          <Chart />
          <PageTable />
        </div>
      </div>
    </>
  );
}

export default App;
