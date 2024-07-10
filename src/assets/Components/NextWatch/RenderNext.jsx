import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RenderNext(props) {
  let { original_title, poster_path, id, original_name } = props.data;
  const navigate = useNavigate();
  return (
    <div className="posters">
      <img
        className="poster"
        onClick={() => navigate(`/show/${id}`)}
        src={` https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
      />
      <p className="title">{original_title ? original_title : original_name}</p>
    </div>
  );
}

export default RenderNext;
