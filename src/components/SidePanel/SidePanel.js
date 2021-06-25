import './sidepanel.css'
const SidePanel=()=>{

    return(
        <div class="sidebar-sticky mt-4">
            <ul class="nav flex-column fixed-column ">
              <li class="nav-item">
                <a class="nav-link active text-light py-3" href="#">
                  
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light py-3" href="#">
                  Troubleshooting Steps
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light py-3" href="#">
                  About us
                </a>
              </li>
              
            </ul>
          </div>
    )
}

export default SidePanel