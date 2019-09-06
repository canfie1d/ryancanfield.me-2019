import React from 'react';
import Card from '../Components/Card';

const CardList = props => {
  const renderCards = () => {
    const cardList = [];

    for (let i = 0; i < props.cards.length; i++) {
      cardList.push(
        <Card
          key={i}
          element={props.element}
          inList
        >
          {props.cards[i]}
        </Card>
      )
    }

    return cardList;
  }

  return (
    <ul className='card__list'>
      {renderCards()}
    </ul>
  );
}

export default CardList;
