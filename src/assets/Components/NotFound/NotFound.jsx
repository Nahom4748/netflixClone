import React from "react";
import "./notfound.css";
import Nav from "../Navigation/Nav";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="lost">
      <Nav />
      <div className="lost_image">
        <div className="lost_inner">
          <div className="lost--title">
            <h1>Lost Your Way?</h1>
          </div>
          <div className="lost--info">
            <p>
              Sorry, We can't Find this Page. You'll find lost to explore on the
              home page.
            </p>
          </div>
          <div className="lost--button">
            <button
              onClick={() => {
                navigate(`/`);
              }}
            >
              Netflix Home
            </button>
          </div>
          <div className="lost--code">
            <span className="line">|</span>
            <p className="errors">
              <span className="code">Error Code </span>
              <span className="page404">NSES-404</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
