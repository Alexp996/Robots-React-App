import { Component } from 'react';
import './card.css';

const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=160x160`}
        alt={`${name}`}
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
