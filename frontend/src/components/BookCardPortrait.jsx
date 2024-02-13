import React from "react";
import { cardStylePortrait } from "../styles/bookcard";
import PrimaryButton from "./PrimaryButton";

const BookCardPortrait = (props) => {
  return (
    <div className={cardStylePortrait}>
      <div className="p-2">
        <img src={props.image} className="w-fill h-fill" />
      </div>
      <div className="grid grid-cols-6 p-2 ">
        <div className="col-span-3 grid grid-rows-1">
          <div className="text-xl font-bold">{props.title}</div>
          <p>{props.author}</p>
        </div>
        <div className="col-span-3 grid grid-rows-1">
          <div className="m-[4px]">{props.text}</div>
          <PrimaryButton text="Read more" location="/book/2" />
        </div>
      </div>
    </div>
  );
};

export default BookCardPortrait;