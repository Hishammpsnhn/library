import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

function Rating({rating}) {
  return (
    <>
      <div className="start-rating">
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={rating}
        />
      </div>
    </>
  );
}

export default Rating;
