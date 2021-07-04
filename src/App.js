import "./App.css";

import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Aboutus from "./components/Aboutus/Aboutus";
import Home from "./components/Home/Home";
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';
import Table from "./components/Table/Table";

function App() {
  return (
    <>
      <Router>
      <Header />
      <div className="row mt-5">
        <div className="side-panel col-lg-2 d-none d-xl-block d-lg-block pr-0 ">
          <SidePanel />
        </div>
        <div className="page-body col-lg-10">
          <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/aboutus' component={Aboutus}></Route>
          <Route exact path='/table' component={Table}></Route>
          
        </Switch>
        </div>
        </div>

      </Router>
    </>
  );
}

export default App;
