import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import BookCard from "../components/BookCard";
import { books } from "../constants/bookcard";
import logo from "../assets/Image.png";
import { dummyimage } from "../constants/bookcard";
import PrimaryButton from "../components/PrimaryButton";

const Swiper = () => {
  const card = [
    {
      image: dummyimage,
      name: "Emma",
      author: "Jane Auten",
    },
    {
      image: logo,
      name: "Two schoolgirls",
      author: "Jane Auten",
    },
    {
      image: dummyimage,
      name: "Alice in the wonderland",
      author: "Jane Auten",
    },
    {
      image: logo,
      name: "All too well",
      author: "Jane Auten",
    },
  ];

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  var liked = [];
  var disliked = [];

  const [index, setIndex] = useState(0);
  function onSwipe(val, dir) {
    setIndex((val + 1) % card.length);
    if (dir === "like") {
      liked.push(card[val]);
    } else {
      disliked.push(card[val]);
    }
  }
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center m-16">
      <div className="grid grid-rows-1 col-span-3 justify-center items-center p-2 rounded-md shadow-lg border-[1px] m-2 transition hover:scale-110 duration-700 delay-300">
        <img src={card[index].image} className="w-fill h-fill" />
        <span className="text-base font-semibold m-2">{card[index].name}</span>
        <span className="text-sm text-gray-400 font-extralight">
          {card[index].author}
        </span>
        <div className="grid grid-cols-6 justify-between items-center gap-2">
          <button
            className="bg-black col-span-3 text-white hover:bg-white rounded-sm hover:text-black border-2 border-black"
            onClick={() => onSwipe(index, "like")}
          >
            Like
          </button>
          <button
            className="bg-black col-span-3 text-white hover:bg-white rounded-sm hover:text-black border-2 border-black"
            onClick={() => onSwipe(index, "dislike")}
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
