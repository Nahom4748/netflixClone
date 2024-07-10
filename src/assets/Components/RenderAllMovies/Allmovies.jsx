import React from "react";
import NextWatch from "../NextWatch/NextWatch";
import moviedata from "../../Data/moviedata";
import blur from "../../image/icons/blur.jpeg";
import "./allmovies.css";
import { useNavigate } from "react-router-dom";

function Allmovies() {
  const navigate = useNavigate();

  return (
    <div>
      <NextWatch data={moviedata.netflixorginal} title={"Your Next Watch"} />
      <NextWatch data={moviedata.Action} title={"Action Movies"} />
      <NextWatch data={moviedata.comedy} title={"Comedy Movies"} />
      <NextWatch
        data={moviedata.Documentaries}
        title={"Action & Adventure Movies"}
      />
      <NextWatch data={moviedata.Horror} title={"Horror Movies"} />
      <NextWatch
        data={moviedata.RealLife}
        title={"Movies Based on Real Life"}
      />
      <NextWatch data={moviedata.comedy} title={"New on Netflix"} />
      <NextWatch data={moviedata.Suspense} title={"Suspenseful Movies"} />
      <NextWatch data={moviedata.Family} title={"Family Movies"} />
      <NextWatch data={moviedata.GetIn} title={"Get In On the Action"} />
      <NextWatch data={moviedata.Africa} title={"Made in Africa"} />
      <NextWatch data={moviedata.comedy} title={"Kids & Family Movies"} />
      <NextWatch data={moviedata.Pop} title={"Blockbuster Movies"} />
      <NextWatch
        data={moviedata.comedy}
        title={"Critically Acclaimed Movies"}
      />
      <div className="footer_image">
        <div className="blur_image">
          <img src={blur} alt="" />
        </div>
      </div>
      <div className="footer_join">
        <div className="footer_box">
          <div className="footertitle">
            <h2>There’s even more to watch.</h2>
          </div>
          <div className="footerdiscription">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
          <div className="footerButton">
            <button
              onClick={() => {
                navigate(`/signup`);
              }}
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allmovies;
