import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.fashion==="darkMode" ? "dark" : "light"}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Death Note</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><button onClick={props.ItachiTh}>Itachi Theme</button></li>
            <li><button onClick={props.ZoroTh}>Zoro Theme</button></li>
            <li><button onClick={props.LuffyTh}>Luffy Theme</button></li>
            <li><button onClick={props.KakashiTh}>Kakashi Theme</button></li>
          </ul>
        </li>
        
      </ul>
      
    </div>

  </div>
  <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.togg} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : props.fashion==="darkMode"? "white" :"black"}}>{props.theme}</label>
</div>

</nav>
    </div>
  )
}
