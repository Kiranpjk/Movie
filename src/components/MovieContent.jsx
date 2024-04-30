import React from "react";
import "./movieContent.css";
//import titleImg from '../images/gaami-main.jpg';
import Button from "./Button";

function MovieContent({ movie }) {
  return (
    <div className={`content ${movie.active ? "active" : undefined} movie-details`}>
      <div>
        <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      </div>
      <div>
        <h4>
          <span>{movie.title}</span>
          <span>{movie.length}</span>
          <span>{movie.genre}</span>
        </h4>
        <p>{movie.description}</p>
        <Button
          icon={<ion-icon name="bookmark-outline"></ion-icon>}
          name="Book"
          color="#ff3700"
          bgColor="#ffffff"
        />
        <Button
          icon={<ion-icon name="add-outline"></ion-icon>}
          name="MY LIST"
        />
      </div>
    </div>
  );
}

export default MovieContent;
