import React, { Dispatch, SetStateAction } from 'react';
import { BsStarFill } from 'react-icons/bs';

interface IRatings {
  maxRatings: number;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
}
const StarRatings: React.FC<IRatings> = ({ maxRatings, rating, setRating }) => {
  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  const getColor = (index: number) => {
    return index + 1 <= rating ? 'rated' : 'noRating';
  };

  return (
    <div className='flex gap-2 justify-center'>
      {[...Array(maxRatings)].map((_, index) => (
        <BsStarFill
          key={index}
          className={`star ${getColor(index)}`}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRatings;
