import React from "react";
import UserHeader from "../components/UserHeader";
import { profile } from "../constants/bookcard";
import UserBody from "../components/UserBody";

const UserDashboard = () => {
  return (
    <div className="grid grid-cols-12 col-span-12 p-16 m-4">
      <UserHeader
        image={profile}
        name="Vaishali"
        about="Est dolore mollit ullamco sint excepteur irure labore dolore ut culpa sunt consequat deserunt occaecat.Ipsum magna officia fugiat proident et deserunt cupidatat."
      />
      <UserBody />
    </div>
  );
};

export default UserDashboard;
