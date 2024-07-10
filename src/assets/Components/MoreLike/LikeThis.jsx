import React, { useEffect, useState } from "react";
import "./Morelike.css";
import { useNavigate } from "react-router-dom";

function LikeThis(props) {
  let { original_title, poster_path, id, backdrop_path } = props.data;
  const navigate = useNavigate();
  return (
    <div className="MoreLike_inner">
      <img
        className="images"
        onClick={() => {
          navigate(`/show/${id}`);
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
        src={` https://image.tmdb.org/t/p/original/${
          poster_path ? poster_path : backdrop_path
        }`}
        alt={original_title}
      />
    </div>
  );
}

export default LikeThis;
