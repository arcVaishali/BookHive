import React from "react";
import { dummyimage } from "../constants/bookcard";
import { bookdummyimage , profile } from "../constants/bookcard";
import BookCard from "../components/BookCard";
import BookCardWide from "../components/BookCardWide";
import BookCardPortrait  from "../components/BookCardPortrait";
import BookClub from "../components/BookClub";

const MatchedBooksGallery = () => {
  return (
    <>
    <div className="grid grid-cols-12 col-span-12 m-8 p-16 gap-2">
        <BookCard
          image={bookdummyimage}
          title="Vaishali"
          author="Vaishali"
          price="134"
        />
      </div>
      <div className="grid grid-cols-12 col-span-12 m-4 p-16 gap-2">
        <BookCardWide
          image={dummyimage}
          title="Vaishali"
          author="Vaishali"
          text="xyz"
        />
      </div>
      <div className="grid grid-cols-12 col-span-12 m-4 p-16 gap-2">
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
