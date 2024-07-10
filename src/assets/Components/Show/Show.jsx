import { Children, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./showstyle.css";
import Netflixlogo from "../../image/BG/Netflix.png";
import LikeThis from "../MoreLike/LikeThis";
import movieTrailer from "movie-trailer";
import axios from "../../Data/axios";
import moviedata from "../../Data/moviedata";

function Show() {
  const params = useParams();

  const [MovieDetail, SetMovieDetail] = useState([]);
  const [LikeThisMovies, SetLikeThis] = useState([]);
  const [Youtube, SetYoutube] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(
          `${moviedata.Details.Path}${params.id}${moviedata.Details.url}`
        );
        SetMovieDetail(request.data);
        const like = await axios.get(
          `${moviedata.Details.Path}${params.id}/similar${moviedata.Details.url}`
        );
        SetLikeThis(like.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params]);
  movieTrailer(MovieDetail.original_title).then((url) => {
    const ID = new URLSearchParams(new URL(url).search);
    const urlData = ID.get("v");
    SetYoutube(urlData);
  });
  return (
    <div className="movie_container">
      <div className="MovieDetail">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            MovieDetail.backdrop_path
              ? MovieDetail.backdrop_path
              : MovieDetail.poster_path
          }`}
          alt=""
        />
        <div className="MovieDetail_shadow"></div>
        <div className="MovieDetail_texts">
          <h1>{MovieDetail.title}</h1>
          <h3>{MovieDetail.title}</h3>
          <div>
            <p>
              <span>
                {MovieDetail.release_date} |{MovieDetail.runtime} hr{" "}
              </span>
              <p className="MovieDetail_overview">{MovieDetail.overview}</p>
              <h4>{MovieDetail.tagline}</h4>
            </p>
          </div>
        </div>
        <div className="MovieDetail_price">
          <div className="more">
            <div>
              <img src={Netflixlogo} alt="" />
            </div>
            <div>
              <p className="price">Plans start at just USD 2.99</p>
            </div>
          </div>

          <div>
            <button>Join Now </button>
          </div>
        </div>
        <div className="MovieDetail_moreinfo">
          <hr />
          <p>{MovieDetail.tagline}</p>
          <hr />
        </div>
        <div className="vedios">
          <p>
            <b>Videos </b> | <span className="size">{MovieDetail.title}</span>
          </p>
        </div>
        <div className="Youtube_vedios">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${Youtube}?si=bY28SoNZZUd5GQUj`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="MoreDetails">
          <h2>More Details</h2>
          <div className="moreInner">
            <div className="fristbox">
              <p className="fr-title">Watch offline</p>
              <p>Download and watch everywhere you go.</p>
              <p className="fr-title"> Audio</p>
              <p>English - Audio Description, English [Original]</p>
              <p className="fr-title">Cast</p>
              <p>Nicole Kidman</p>
              <p>Liza Koshy</p>
            </div>
            <div className="box2">
              <p className="fr-title">Genres</p>
              <p>Romantic Comedy Movies, Comedy Movies, Romantic Movies</p>
              <p className="fr-title">Subtitles</p>
              <p>English</p>
            </div>
            <div className="box3">
              <p className="fr-title">This movie is...</p>
              <p>Heartfelt, Romantic</p>
              <p className="fr-title">Heartfelt, Romantic</p>
              <p>Go behind the scenes and learn more on Tudum.com</p>
            </div>
          </div>
        </div>
        <div className="more-like">
          <h3 className="more11">More Like This</h3>
          <div className="MoreLike ">
            <div className="MoreLike_center">
              {LikeThisMovies.slice(0, 12).map((Element, i) => {
                return <LikeThis data={Element} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
