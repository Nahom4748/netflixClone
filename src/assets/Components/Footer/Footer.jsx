import React from "react";
import "./footerStyle.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <div className="Footer_title">
          <div className="Footer_title_text">
            <a href="">
              Read about Netflix TV shows and movies and watch bonus videos on
              Tudum.com.
            </a>
          </div>
        </div>
        <div className="question">
          <a className="contact" href="">
            Questions? Contact us.
          </a>
        </div>
        <div className="footer_raper">
          <div className="footerinner">
            <div className="footer_link">
              <div className="link1">
                <ul>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Investor Relations</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Privacy</a>
                  </li>
                  <li>
                    <a href="">Speed Test</a>
                  </li>
                </ul>
              </div>
              <div className="link2">
                <ul>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Jobs</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Cookie Preferences</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Legal Notices</a>
                  </li>
                </ul>
              </div>
              <div className="link3">
                <ul>
                  <li>
                    <a href="">Account</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Ways to Watch</a>
                  </li>
                  <li>
                    {" "}
                    <a href="">Corporate Information</a>
                  </li>
                  <li>
                    <a href="">Only on Netflix</a>
                  </li>
                </ul>
              </div>
              <div className="link4">
                <ul>
                  <li>
                    <a href="">Media Center</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
