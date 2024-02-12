import React from "react";
import { books } from "../constants/bookcard";
import BookCard from "./BookCard";

const UserBody = () => {
  const filter = ["All", "Fiction", "Non-Fiction", "Fantasy"];
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center my-8">
      <div className="grid grid-cols-12 col-span-12 ml-64">
        {filter.map((element, index) => (
          <button className="bg-gray-800 col-span-2 text-center text-white p-[5px] m-4 rounded-sm">
            {element}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-12 col-span-12 justify-center items-center my-8">
        {books.map((book) => (
          <BookCard
            image={book.image}
            title={book.title}
            author={book.author}
            text={book.text}
          />
        ))}
      </div>
    </div>
  );
};

export default UserBody;
