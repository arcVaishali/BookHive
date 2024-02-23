import React from "react";
import { dummyimage } from "../constants/bookcard";
import { Link } from "react-router-dom";
import image from "../assets/Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const UserFooter = () => {
  const contact = ["567829-272938", "email@gmail.com", "Delhi, India"];
  const sitemap = ["Home", "About", "Contact"];
  const socials = [
    { name: faInstagram, to: "https://www.instagram.com/vaishali_p14" },
    {
      name: faLinkedin,
      to: "https://www.linkedin.com/in/vaishali-p-97326221b/",
    },
    { name: faTwitter, to: "https://twitter.com/Vaishali_P14" },
  ];
  return (
    <div className="grid grid-cols-12 col-span-12 gap-8 justify-center items-center bg-black text-white p-16">
      <div className="col-start-2 col-span-4 border-r-[1px] border-gray-700">
        <img src={image} className="w-fill h-fill" />
      </div>
      <div className="grid grid-rows-1 col-span-8">
        <span className="text-5xl uppercase mb-2 font-semibold ml-[160px]">Contact</span>
        <form
          data-aos="fade-in"
          className="grid grid-rows-1 col-start-1 justify-center items-center mr-8"
          action=""
          name=""
          method="POST"
          noValidate
          autoComplete="true"
        >
          <div className="grid grid-rows-1 my-2">
            <label className="text-[10px] uppercase font-semibold" for="name">
              Your Name
            </label>
            <input
              className="border-white border-[1px] bg-transparent text-[10px] p-2"
              type="text"
              placeholder="Your Name"
              id="name"
            />
          </div>

          <div className="grid grid-rows-1 my-4">
            <label className="text-[10px] uppercase font-semibold" for="name">
              Your Email
            </label>
            <input
              className="border-white border-[1px] bg-transparent text-[10px] p-2"
              type="text"
              placeholder="Type your email"
              id="name"
            />
          </div>

          <div className="grid grid-rows-1 my-4">
            <label className="text-[10px] uppercase font-semibold" for="name">
              Subject
            </label>
            <input
              className="border-white border-[1px] bg-transparent text-[10px] p-2"
              type="text"
              placeholder="Type subject"
              id="name"
            />
          </div>

          <div className="grid grid-rows-1 my-4">
            <label className="text-[10px] uppercase font-semibold" for="name">
              Message
            </label>
            <textarea
              className="border-white border-[1px] bg-transparent text-[10px] p-2"
              placeholder="Type your message..."
              id="name"
            />
          </div>

          <button className="grid cols-span-8 w-[300px] lg:w-[600px] rounded-full bg-white text-black hover:bg-black hover:text-white border-2 border-white p-4 my-4">
            Send
          </button>
        </form>
      </div>
      <div className="grid grid-cols-12 col-span-8 col-start-7 ml-4">
        {contact.map((element, key) => (
          <span className="text-sm my-1 font-extralight col-span-3">{element}</span>
        ))}
      </div>
      
      <div className="col-span-12 grid grid-cols-12 justify-between items-center col-start-4">
        <div className="col-span-2">
          <img src={image} className="w-fill h-fill" />
        </div>
        {sitemap.map((element, key) => (
          <span className="col-span-1">{element}</span>
        ))}
        {socials.map((element, index) => (
          <Link
            to={element.to}
            target="_blank"
            className="font-thin uppercase text-xs text-center hover:text-gray-300"
          >
            {" "}
            <FontAwesomeIcon icon={element.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserFooter;
