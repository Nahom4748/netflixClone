import React from "react";
import logo from "../../image/icons/Logo.png";
import "./singnup.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="Login_nav">
      <div className="login_inner">
        <div className="login_logo">
          <img
            onClick={() => {
              navigate(`/`);
            }}
            src={logo}
            alt=""
          />
        </div>
        <div className="login_btn">
          <div
            onClick={() => {
              navigate(`/login`);
            }}
            className="lgbtn"
          >
            <button>Sign in</button>
          </div>
        </div>
      </div>
      <div className="Login_detail">
        <p>Unlimited movies, TV shows, and more</p>
      </div>
      <div className="anywhere">
        <p>Watch anywhere. Cancel anytime.</p>
      </div>
      <div className="ready">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="login_getstart">
        <div className="getstarted">
          <div className="email">
            <input type="text" placeholder="Email address" />
          </div>
          <div className="statbtn">
            <button>Get started {">"} </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
