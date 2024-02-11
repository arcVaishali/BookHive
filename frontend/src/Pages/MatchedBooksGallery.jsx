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
        {/* <div className="col-span-12 text-5xl uppercase font-semibold">Top Picks</div> */}
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
        <div className="flex col-span-12 text-5xl font-bold m-4">Recent</div>
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
        <BookCardPortrait
          image={bookdummyimage}
          title="Vaishali"
          author="Vaishali"
          text="xyz"
        />
      </div>
      <div className="grid grid-cols-12 col-span-12 m-4 p-16 gap-2">
        <BookClub
          image={profile}
          name="Vaishali"
          tagline="Amet deserunt sint proident"
          text="Ex pariatur elit id nulla consequat.Veniam excepteur duis pariatur elit duis consectetur et consectetur."
        />
      </div>
    </>
  );
};

export default MatchedBooksGallery;
