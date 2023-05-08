import React, { useEffect, useState } from "react";
import briefcase from "./img/w95-briefcase.png";
import paint from "./img/w95-paint.png";
import book from "./img/win95-book.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css"; // needs additional webpack config!
import Calendar from "./Components/Calendar";

function getCurrentTime() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}

export default function BasicExample(this: any) {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
  }, []);

  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark justify-content-between mb-3">
            <ul className="navbar-nav navbar-nav-hover flex-row align-items-center">
              <li className="nav-item">
                <Link className="nav-link nav-link-inner-text" to="/">
                  <img className="btn-inner-icon" src={book} alt="book" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-inner-text"
                  to="/voor-werkgevers"
                >
                  <img
                    className="btn-inner-icon"
                    src={briefcase}
                    alt="briefcase"
                  />
                  Voor Werkgevers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-inner-text" to="/profiel">
                  <img className="btn-inner-icon" src={paint} alt="paint" />
                  Profiel
                </Link>
              </li>
            </ul>
            <div className="navbar">
              <span className="text-center">
                SIMDO Urenregistratie &amp; verlof
              </span>
            </div>
            <div className=" time-container text-center">
              <span className="time text-uppercase">{time}</span>
            </div>
          </nav>

          {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/voor-werkgevers" element={<Werkgevers />} />
            <Route path="/profiel" element={<Profiel />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

function Werkgevers() {
  return (
    <div>
      <h2>Voor Werkgevers</h2>
    </div>
  );
}

function Profiel() {
  return (
    <div>
      <h2>Profiel</h2>
    </div>
  );
}
