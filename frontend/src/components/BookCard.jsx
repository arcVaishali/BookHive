import React from "react";
import { cardStyle } from "../styles/bookcard";
import PrimaryButton from "./PrimaryButton";

const BookCard = (props) => {
  return (
    <div className={cardStyle}>
      <div className="p-2">
        <img src={props.image} className="w-fill h-fill" />
      </div>
      <div className="grid grid-cols-6 p-2 ">
        <div className="col-span-3 grid grid-rows-1">
          <div className="text-l font-bold">{props.title}</div>
          <p className="text-gray-500 front-extralight text-sm">{props.author}</p>
        </div>
        <div className="col-span-3 grid grid-rows-1">
          <div className="text-xs text-gray-400 m-2">{props.text}</div>
          <PrimaryButton location="/book/1" text="Read more" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
