import React from "react";
import { Link } from "react-router-dom";
import { cardStyle } from "../styles/bookcard";
import { primaryButton } from "../styles/bookcard";
import PrimaryButton from "./PrimaryButton";

const BookCard = (props) => {
  return (
    <div className={cardStyle}>
      <div className="p-2">
        <img src={props.image} className="w-fill h-fill" />
      </div>
      <div className="grid grid-cols-6 p-2 ">
        <div className="col-span-3 grid grid-rows-1">
          <div className="text-xl font-bold">{props.title}</div>
          <p>{props.author}</p>
        </div>
        <div className="col-span-3 grid grid-rows-1">
          <div>{props.text}</div>
          <PrimaryButton location="/book/1" text="Read more" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
