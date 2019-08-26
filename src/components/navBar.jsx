import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link className="navbar-brand" to="/">
        Visitors Trackng
        </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          {user && user.type === 'Security' &&
            < React.Fragment >
              <NavLink className="nav-item nav-link" to="/visitorForm">
                Visitor Form
            </NavLink>
              <NavLink className="nav-item nav-link" to="/visitorDetails">
                Visitor Details
          </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
          </NavLink>
              <NavLink className="nav-item nav-link" to="/">
                {user.name}
              </NavLink>

            </React.Fragment>
          }
          {!user && <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>}
          {!user && <NavLink className="nav-item nav-link" to="/register">
            Register
            </NavLink>}
        </ul>
      </div>

    </nav>
  );
};
export default NavBar;
