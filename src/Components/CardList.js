import React from 'react';
import Card from '../Components/Card';

export default class CardList extends React.Component {
  renderCards() {
    const cardList = [];

    for (let i = 0; i < this.props.cards.length; i++) {
      cardList.push(
        <Card
          key={i}
          element={this.props.element}
          inList
        >
          {this.props.cards[i]}
        </Card>
      )
    }

    return cardList;
  }

  render() {
    return (
      <ul className='card__list'>
        {this.renderCards()}
      </ul>
    );
  }
}
