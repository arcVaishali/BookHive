import React from "react";
import PrimaryButton from "./PrimaryButton";

const Section1 = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 justify-center items-center gap-4">
      <div className="col-span-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1675884215359-a73ab018aaee?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-fill h-fill"
        />
      </div>
      <div className="col-span-6 grid grid-rows-1">
        <div className="text-5xl col-span-12 my-4">
          Sustainable Hub for Second Hand Books
        </div>
        <div className="text-sm col-span-12 my-4">
          Non nostrud ex ipsum adipisicing irure ipsum velit aliqua.Sunt enim
          velit proident irure magna veniam in exercitation magna dolore elit
          dolor veniam incididunt.
        </div>
        <PrimaryButton text="Get started" location="/sign-up" />
        {/* <div className="grid grid-cols-12 col-span-12 mt-8">
          <img
            src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="col-span-12 h-[590px] -ml-4"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Section1;
