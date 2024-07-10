import React, { useEffect, useState } from "react";
import "../../style/nextwatch.css";
import RenderNext from "./RenderNext";
import Next from "../../image/icons/icons8-next-100 (2).png";
import Back1 from "../../image/icons/icons8-back-100.png";
import axios from "../../Data/axios";

function NextWatch(props) {
  const [nextData, SetNextData] = useState([]);
  const [container, Setcontainer] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(props.data);
        SetNextData(request.data.results);
      } catch (error) {
        console.log(error);
      }
      Setcontainer(props.title.replaceAll(" ", ""));
    })();
  }, []);
  return (
    <div className="size">
      <h2 className="next_title">{props.title}</h2>
      <div className="container">
        <img
          className="next1"
          onClick={() => {
            let left = document.querySelector(`.${container}`);
            left.style.scrollBehavior = "smooth";
            left.scrollLeft -= 900;
          }}
          src={Back1}
          alt=""
        />
        <div className={`Nextwatch ${container}`}>
          {nextData.map((movies, i) => {
            return <RenderNext data={movies} key={i} />;
          })}
        </div>
        <img
          className="next1"
          id="next_id"
          onClick={() => {
            let left = document.querySelector(`.${container}`);
            left.style.scrollBehavior = "smooth";
            left.scrollLeft += 900;
          }}
          src={Next}
          alt=""
        />
      </div>
    </div>
  );
}

export default NextWatch;
