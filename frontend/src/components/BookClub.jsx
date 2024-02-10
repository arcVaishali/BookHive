import React from "react";
import { bookClubCard } from "../styles/bookclub";
import PrimaryButton from "./PrimaryButton";

const BookClub = (props) => {
  return (
    <div className={bookClubCard}>
      <div className="col-span-3">
        <img src={props.image} className="w-[100px] h-[60px] rounded-full" />
      </div>
      <div className="col-span-9 grid p-2 ">
        <div className="col-span-3">
          <div className="text-xl font-bold">{props.name}</div>
          <p className="text-sm font-extralight text-gray-600">
            {props.tagline}
          </p>
        </div>
      </div>
      <div className="col-span-12 text-sm">{props.text}</div>
      <PrimaryButton text="Read more" location="/book/2" />
    </div>
  );
};

export default BookClub;
