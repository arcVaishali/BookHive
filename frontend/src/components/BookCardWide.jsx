import React from "react";
import { cardStyleWide } from "../styles/bookcard";
import PrimaryButton from "./PrimaryButton";

const BookCardWide = (props) => {
  return (
    <div className={cardStyleWide}>
      <div className="p-2">
        <img src={props.image} className="w-fill h-fill" />
      </div>
      <div className="grid grid-cols-6 p-2 ">
        <div className="col-span-3 grid grid-rows-1">
          <div className="text-xl font-bold">{props.title}</div>
          <p className="text-gray-500 front-extralight text-sm">{props.author}</p>
        </div>
        <div className="col-span-3 grid grid-rows-1">
          <div className="text-xs text-gray-400 m-2">{props.text}</div>
          <PrimaryButton text="Read more" location="/book/2" />
        </div>
      </div>
    </div>
  );
};

export default BookCardWide;
