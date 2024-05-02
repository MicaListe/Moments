import React from "react";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/home" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">MOMENTS EVENTS</span>
            </a>
            <ul className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 mb-3 fw-bold text-white text-decoration-none" style={{ padding: '10px', borderRadius: '5px' }}>
                  <i className="bi bi-house fs-4"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a href="#submenu1" className="nav-link px-0 align-middle" data-bs-toggle="collapse" style={{ color: 'white', textDecoration: 'none', padding: '10px', borderRadius: '5px' }}>
                  <i className="bi bi-speedometer2 fs-4"></i> <span className="ms-1 d-none d-sm-inline">Eventos</span>
                </a>
                <ul className="collapse show nav flex-column ms-1" id="submenu1">
                  <li>
                    <a href="#" className="nav-link px-0 mb-3 fw-bold text-white text-decoration-none" style={{ padding: '10px', borderRadius: '5px' }}>Bodas</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 mb-3 fw-bold text-white text-decoration-none" style={{ padding: '10px', borderRadius: '5px' }}>Fiestas XV</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 mb-3 fw-bold text-white text-decoration-none" style={{ padding: '10px', borderRadius: '5px' }}>Fiestas Corporativas</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle mb-3 fw-bold text-white text-decoration-none" style={{ padding: '10px', borderRadius: '5px' }}>
                  <i className="bi bi-table fs-4"></i> <span className="ms-1 d-none d-sm-inline">Servicio de Catering</span>
                </a>
              </li>
              <li>
                <a href="#submenu2" className="nav-link px-0 align-middle mb-3 fw-bold text-white text-decoration-none" data-bs-toggle="collapse" style={{ padding: '10px', borderRadius: '5px' }}>
                  <i className="bi bi-bootstrap fs-4"></i> <span className="ms-1 d-none d-sm-inline">Decoración</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle mb-3 fw-bold text-white text-decoration-none" style={{ padding: '10px', borderRadius: '5px' }}>
                  <i className="bi bi-people fs-4"></i> <span className="ms-1 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>

            <div className="dropdown pb-4">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle me-2"/>
                <span className="d-none d-sm-inline fw-bold">Nombre del Usuario</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="col py-3">
          <h3>Left Sidebar with Submenus</h3>
          <p className="lead">
            An example 2-level sidebar with collapsible menu items. The menu functions like an "accordion" where only a single 
            menu is open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
          <ul className="list-unstyled">
            <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;



