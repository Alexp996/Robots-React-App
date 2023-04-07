import './cardList.css';
import Card from '../card/card.components';
import { findAllByDisplayValue } from '@testing-library/react';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
