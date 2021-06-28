import './sidepanel.css'
const SidePanel=()=>{

    return(
        <div className="sidebar mt-4">
            <ul className="nav flex-column ">
              <li className="nav-item nav-link panel-item">
                <a className="sidebar-text active text-light " href="">
                  Dashboard <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item nav-link panel-item">
                <a className="sidebar-text text-light" href="">
                  Troubleshooting Steps
                </a>
              </li>
              <li className="nav-item nav-link panel-item">
                <a className="sidebar-text text-light"  href="">
                  About us
                </a>
              </li>
              
            </ul>
          </div>
    )
}

export default SidePanel