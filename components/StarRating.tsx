import { Star } from "lucide-react";
import React from "react";

const arr = [1, 2, 3, 4, 5];
const StarRating = ({ rating }: { rating: number }) => {
  // Ensure that the rating is within the range of 1 to 5
  const normalizedRating = Math.min(Math.max(rating, 1), 5);

  return (
    <div className="flex">
      {arr.map((i) => (
        <span
          key={i}
          className={`text-4xl ${
            i <= normalizedRating ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <Star fill={ i <= normalizedRating ? "yellow" : "text-gray-300"}/>
        </span>
      ))}
    </div>
  );
};

export default StarRating;
