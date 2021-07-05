import { getCountData } from "../../Services/GetData";
import { useState, useEffect } from "react";
import "./DisplayCount.css";
import {Link} from 'react-router-dom';


const DisplayCount = () => {
  const [total, settotal] = useState();
  const [noncompliant, setnc] = useState();
  const [percent, setperc] = useState();
  useEffect(() => {
    getCountData().then((val) => {
      settotal(val.total);
      setnc(val.noncompliant);
      setperc(val.percentage);
    });
  }, [])
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className=" card col-lg-6 col-md-6 col-6 p-0 ">
          
         {/* <div className=" card-title text-light heading px-3">Splunk dashboard </div> */}
          <div className="card-body count">
          We're almost there!!
          <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" 
              role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" 
              style={{width: percent+'%'}} >{percent}%</div>
          </div>
          </div>
        </div>
        <div className="card col-lg-2 col-md-2 col-6 p-0 ">

          <div className="card-title heading px-3 pt-2">Non-Compliant</div>
          <Link to='/table'>
          <div className="card-body count">{noncompliant}</div>
          </Link>
        </div>
        <div className="card col-lg-2 col-md-2 col-6 p-0 ">
          
          <div className=" card-title  heading px-3 pt-2">Inventory Total</div>
          <div className="card-body count">{total}</div>
          
        </div>
        <div className=" card col-lg-2 col-md-2 col-6 p-0">
          
          <div className=" card-title  heading px-3 pt-2">% Compliance</div>
          <div className="card-body count">{percent}%</div>
          
        </div>
      </div>
    </div>
  );
};
export default DisplayCount;
