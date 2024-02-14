import React from "react";
import TinderCard from "react-tinder-card";
import BookCard from "../components/BookCard";
import { books } from "../constants/bookcard";

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

const Swiper = () => {
  return (
    <div className="grid grid-cols-12 col-span-12">
      <TinderCard
    //   className="cols-span-12"
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        // preventSwipe={["right", "left"]}
      >
        {books.map((book) => (
          <BookCard
            image={book.image}
            title={book.title}
            author={book.author}
            text={book.text}
          />
        ))}
      </TinderCard>
    </div>
  );
};

export default Swiper;
