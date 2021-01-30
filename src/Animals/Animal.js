import React from "react";

const animal = (props) => {
  return (
    <div>
      <h2>
        My Animal: {props.name} with {props.color}
      </h2>
      <p>{props.children}</p>
    </div>
  );
};

export default animal;
