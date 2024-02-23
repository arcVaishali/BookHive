// import React from 'react'
import UserBody from "../components/UserBody";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import { profile } from "../constants/bookcard";

const Home = () => {
  return (
    <div className="mt-8">
      <UserHeader
        image={profile}
        name="Vaishali"
        about="Est dolore mollit ullamco sint excepteur irure labore dolore ut culpa sunt consequat deserunt occaecat.Ipsum magna officia fugiat proident et deserunt cupidatat."
      />
      <UserBody />
      <UserFooter />
    </div>
  );
};

export default Home;
