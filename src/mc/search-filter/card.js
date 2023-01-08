import React from "react";

const Card = (props) => {
  const {
    data: { id, name, email, gender, status },
  } = props;

  return (
    <>
      <div className="StyleCard">
        <p>{id}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{gender}</p>
        <p>{status}</p>
      </div>
    </>
  );
};

export default Card;
