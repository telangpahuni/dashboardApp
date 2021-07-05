import './sidepanel.css'

import Aboutus from '../Aboutus/Aboutus';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
 Link} from 'react-router-dom';
const SidePanel=()=>{
    return(
        <div className="sidebar p-0 col-lg-2">
            <ul className="sidebar-item nav flex-column">
              <li className="nav-item nav-link panel-item mt-2">

                <Link to='/' className='panel-item sidebar-text'>
                  Dashboard <span className="sr-only">(current)</span>
                  </Link>
              </li>
              <li className="nav-item nav-link panel-item sidebar-text">
                <Link to='/troubleshootingsteps' className='panel-item sidebar-text'>
                  Troubleshooting Steps
                </Link>
              </li>
              <li className="nav-item nav-link panel-item">

                <Link to='/aboutus' className='panel-item sidebar-text'>
                  About us
                </Link>

              </li>
              <li className="nav-item nav-link panel-item">

                <Link to='/table' className='panel-item sidebar-text'>
                  Detailed Table
                </Link>

              </li>

              

            </ul>
          </div>
    )
}

export default SidePanel