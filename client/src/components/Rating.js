import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import { review } from "../action/ProductAction";

function Rating({ editing, value, setRating, rating }) {

  const ratingChanged = (nextValue) => {
     setRating(nextValue);
  };
  return (
    <>
      <div className="start-rating">
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent
          name="review"
          starColor={"#1e67c0"}
          starCount={5}
          editing={editing}
          value={value}
          onStarClick={ratingChanged}
        />
      </div>
    </>
  );
}

export default Rating;
