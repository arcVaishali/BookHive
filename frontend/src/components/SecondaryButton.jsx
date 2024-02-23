import React from "react";
import { Link } from "react-router-dom";
import { secondaryButton } from "../styles/bookcard";

const SecondaryButton = (props) => {
  return (
    <Link to={props.location} className={secondaryButton}>
      {props.text}
    </Link>
  );
};

export default SecondaryButton;
