import React, { useState } from "react";

const StarRating = ({ totalStars }) => {
  const [star, setStar] = useState(0);
  const handleClick = (pre) => {
    setStar(pre + 1);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        return (
          <Star filled={index < star} onClick={() => handleClick(index)} />
        );
      })}
      Rating {star}
    </div>
  );
};

export default StarRating;

const Star = ({ filled, onClick }) => {
  return (
    <span
      style={{ color: filled ? "orange" : "grey", cursor: "pointer" }}
      onClick={onClick}
    >
      ★
    </span>
  );
};
