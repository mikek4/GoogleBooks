import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.imageLinks.smallThumbnail} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>Title: {props.volumeInfo.title}</h3>
      <h3>Author(s): {props.volumeInfo.authors}</h3>
      <h3>Description: {props.volumeInfo.description}</h3>
      <h3>Link: {props.selfLink}</h3>
    </div>
  );
}

export default BookDetail;
