import React from "react";

const Section2 = () => {
  return (
    <div className="grid grid-cols-12 col-span-12">
      <div className="relative z-5 col-span-12">
        <img
          src="https://images.unsplash.com/photo-1517639493569-5666a7b2f494?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="section2"
          className="w-full h-96"
        />
      </div>
      <div className="col-span-6 flex flex-col justify-center items-center absolute mt-32 ml-32 mr-32 text-center">
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <p className="text-lg text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In etiam
          vitae, eget in. Egestas eget nunc, sed etiam. Diam in eget etiam
          aliquam.
        </p>
      </div>

    </div>
  );
};

export default Section2;
