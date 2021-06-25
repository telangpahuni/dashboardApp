import './header.css';
import logo from './splunklogo.jpg'
function Header() {
  return (
        <nav className="header-navbar navbar fixed-top navbar-dark bg-dark">
          <a className="title-navbar navbar-brand" href="#">
            <img src={logo}
             width="30" height="30" className="d-inline-block align-top" alt=""/>
              Welcome to Splunk Dashboard
          </a>
        </nav>

  )
}

export default Header
