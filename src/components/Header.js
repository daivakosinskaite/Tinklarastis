import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <h1 className="logo">Start Bootstrap</h1>
          </div>
          <div className="col-6 text-right">
            <nav>
              <ul className="nav-list">
                <li className="nav-item"><a href="#home" className="nav-link grey">Home</a></li>
                <li className="nav-item"><a href="#about" className="nav-link grey">About</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link grey">Contact</a></li>
                <li className="nav-item"><a href="#blog" className="nav-link white">Blog</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
