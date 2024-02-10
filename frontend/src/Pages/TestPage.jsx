import React from "react";
import { bookdummyimage } from "../constants/bookcard";
import BookCard from "../components/BookCard";

const TestPage = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 m-16 p-16 gap-2">
      <BookCard image={bookdummyimage} title="Vaishali" author="Vaishali" price="134" />
    </div>
  );
};

export default TestPage;
