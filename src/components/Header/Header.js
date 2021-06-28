import "./header.css";
import logo from "./splunklogo.jpg";
function Header() {
  return (
    <nav className="header-navbar navbar fixed-top navbar-dark bg-dark">
      <a className="title-navbar navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Welcome to Splunk Dashboard
      </a>
      <button
        className="navbar-toggler d-block d-xl-none d-lg-none d-md-block"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Troubleshooting Steps
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
