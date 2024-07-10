import logo from "../../image/icons/Logo.png";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <div className="Nav">
      <img
        className="Nav_logo"
        onClick={() => {
          navigate(`/`);
        }}
        src={logo}
        alt=""
      />

      <div className="Nav_title_button">
        <div className="Nav_Title">
          <p>UNLIMITED TV SHOWS & MOVIES</p>
        </div>
        <div className="Nav_button">
          <button
            onClick={() => {
              navigate(`/signup`);
            }}
            className="Nav_button_red"
          >
            Join Now
          </button>
          <button
            onClick={() => {
              navigate(`/login`);
            }}
            className="Nav_button_signin"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
