import React from "react";
import { books } from "../constants/bookcard";
import BookCard from "./BookCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bookClubs } from "../constants/bookcard";
import BookClub from "../components/BookClub";

const UserBody = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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

      <div className="col-span-12 text-5xl font-bold ml-4 mt-16 mb-8">
        Book Clubs
      </div>

      <Carousel
        className="col-span-12"
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {bookClubs.map((book) => (
          <BookClub
            image={book.image}
            name={book.name}
            tagline={book.tagline}
            text={book.text}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default UserBody;
