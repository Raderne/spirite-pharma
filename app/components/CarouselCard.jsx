import React from "react";

const CarouselCard = (props) => {
  const { slide } = props;
  const { title, description, imageUrl, slug } = slide;
  return <div>{title}</div>;
};

export default CarouselCard;
