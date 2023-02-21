import './Poster.css';
import React from "react";

function Poster(props) {
  return(
    <article className="poster">
      <img
        className="poster__pic buttons"
        src={props.pic}
        alt={props.alt}
      />
      <h5 className="poster__title">{props.title}</h5>
      <p className="poster__text">{props.text}</p>
    </article>
  );
}

export default Poster;
