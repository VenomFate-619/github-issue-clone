import React from 'react'
import './navbar.css'
function Navbar() {
    return (
      <nav   >
        <div>
          <i className="fas fa-bars fa-lg"></i>
        </div>
        <div>
          <i className="fab fa-github fa-lg"></i>
        </div>
        <div>
          <i className="far fa-bell fa-lg"></i>
        </div>
        
      </nav>
    );
}

export default Navbar
