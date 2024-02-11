import React from "react";
import { bookdummyimage, profile } from "../constants/bookcard";
import BookCard from "../components/BookCard";
import BookCardWide from "../components/BookCardWide";
import BookCardPortrait from "../components/BookCardPortrait";
import BookClub from "../components/BookClub";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { recommendedBooks } from "../constants/bookcard";
import { recentMatchedBooks } from "../constants/bookcard";
import { lastBorrowedBooks } from "../constants/bookcard";
import { highlights } from "../constants/bookcard";
import { bookClubs } from "../constants/bookcard";

const MatchedBooksGallery = () => {
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

  return (
    <>
      <div className="grid grid-cols-12 col-span-12 m-8 p-16 gap-2">
        <div className="col-span-12 text-5xl font-bold ml-4">Top Picks</div>
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
          {recommendedBooks.map((book) => (
            <BookCard
              image={book.image}
              title={book.title}
              author={book.author}
              text={book.text}
            />
          ))}
        </Carousel>
      </div>

      <div className="grid grid-cols-12 col-span-12 m-4 p-16 gap-2">
        <div className="flex col-span-12 text-5xl font-bold m-4">
          Recent
          {/* search bar */}
        </div>
        {recentMatchedBooks.map((book) => (
          <BookCardWide
            image={book.image}
            title={book.title}
            author={book.author}
            text={book.text}
          />
        ))}
      </div>
      <div className="grid grid-cols-12 col-span-12 m-4 p-16 gap-4">
        <div className="grid grid-cols-6 flex-wrap col-span-8">
          {lastBorrowedBooks.map((book) => (
            <BookCard
              image={book.image}
              title={book.title}
              author={book.author}
              text={book.text}
            />
          ))}
        </div>
        <div className="grid gap-4 col-span-4">
          {highlights.map((book) => (
            <BookCardPortrait
              image={book.image}
              title={book.title}
              author={book.author}
              text={book.text}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 m-4 p-16 gap-2">
        <div className="text-5xl font-bold col-span-12 ml-4">Book Clubs</div>
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
    </>
  );
};

export default MatchedBooksGallery;
