import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

function Rating() {
    const [rating,setRating] = useState(10)
  return (
    <>
      <div className="start-rating">
        {/* <h2>Rating from state: {rating}</h2> */}
        <StarRatingComponent
          name="rate2"
          editing={false}
          starCount={5}
          value={3}
        />
      </div>
    </>
  );
}

export default Rating;
