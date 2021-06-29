import './sidepanel.css'

import Aboutus from '../Aboutus/Aboutus';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
 Link} from 'react-router-dom';
const SidePanel=()=>{
    return(
        <div className="sidebar mt-2">
            <ul className="nav flex-column ">
              <li className="nav-item nav-link panel-item">
                {/* <a className="sidebar-text active text-light " href="/"> */}
                <Link to='/'>
                  Dashboard <span className="sr-only">(current)</span>
                  </Link>
                {/* </a> */}
              </li>
              <li className="nav-item nav-link panel-item">

                  Troubleshooting Steps
              </li>
              <li className="nav-item nav-link panel-item">

                <Link to='/aboutus'>
                  About us
                </Link>

              </li>
            </ul>
          </div>
    )
}

export default SidePanel