import React, { useState } from 'react'

export default function navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} bg-gradient navbar-expand-lg shadow-${props.mode === "dark" ? "lg" : "sm"} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/">
            {props.brand}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="http://localhost:3000/">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={props.aboutLink}>
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  {props.pricing}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://localhost:3000/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.dropdown}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
 
            </ul>

          </div>
          <div className="form-check form-switch ">
            <input className="form-check-input" type="checkbox" onClick={props.changeMode} id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"} `} htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
          </div>
        </div>


      </nav>

    </div>
  )
}

