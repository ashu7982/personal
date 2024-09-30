// import { useContext } from "react"
// import { AuthContext } from "../context/AuthContext"
// import { Link } from "react-router-dom";



// const Layout = () => {
// const {auth} = useContext(AuthContext);
// const value = auth.isAuthenticated;
//     return (
//         <div>

//               <nav>
//              <ul>
//                <li><Link to="/">Home</Link></li>
//                <li><Link to="/about">About</Link></li>
//                <li><Link to="/general">General</Link></li>
//                <li><Link to="/login">Login</Link></li>
//                <li><Link to="/dashboard">Dashboard</Link></li>
//                <li><Link to="/admin">Admin</Link></li>
//              </ul>
//            </nav>
//         </div>
//     )
// }

// export default Layout;


// Layout.js
// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Layout.css"; // Optional: Add styling for your layout

// const Layout = ({ children }) => {
//   return (
//     <div className="layout">
//       {/* You can add a header or navigation here if needed */}
//       <div>

//              <nav>
//               <ul>
//                <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/general">General</Link></li>
//                 <li><Link to="/login">Login</Link></li>
//                <li><Link to="/dashboard">Dashboard</Link></li>
//                <li><Link to="/admin">Admin</Link></li>
//              </ul>
//             </nav>
//         </div>
//       {children}
//       {/* You can add a footer here if needed */}
//     </div>
//   );
// };

// export default Layout;


import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active links
import "../Layout.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <div className="layout">
      <header>
        <nav className="navbar">
          <h2 className="logo">Hello Madam jii</h2>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={closeMobileMenu}>
            <li>
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/general" activeClassName="active">
                General
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/" activeClassName="active">
                Login
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/dashboard" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/admin" activeClassName="active">
                Admin
              </NavLink>
            </li> */}
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={handleToggle}
            aria-label={isMobile ? "Close Menu" : "Open Menu"}
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
      <main>{children}</main>
      {/* Optional: Add footer here if needed */}
    </div>
  );
};

export default Layout;
