import React from "react";
import "./singnin.css";
import logo from "../../image/icons/Logo.png";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginLogo">
        <img
          onClick={() => {
            navigate(`/`);
          }}
          src={logo}
          alt=""
        />
      </div>
      <form action="">
        <div className="loginbox">
          <div className="logintxt"> Sign in </div>
          <div className="logininputs">
            <input type="text" placeholder="Email or Phone number" />
          </div>
          <div className="input2">
            <input type="password" placeholder="Password" />
          </div>
          <div className="singinbtn">
            <button>Sign In </button>
          </div>
          <p className="or">OR</p>
          <div className="codelogin">
            <button>Use Sign In Code</button>
          </div>
          <p>
            <a href="">Forgot password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
