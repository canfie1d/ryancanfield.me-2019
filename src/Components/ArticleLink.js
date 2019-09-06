import React from 'react';

export default class ArticleLink extends React.Component {
  render() {
    return (
      <a href={this.props.url} className='card__link'>
        <div className='card__row'>
          <div className='card__column'>
            <img src={this.props.imageUrl} className='card__image' alt='presentational card' role="presentation" />
          </div>
          <div className='card__column'>
            <span className='card__title'>
              {this.props.title}
            </span>
            <div className='card__description-wrapper'>
              <p className='card__description'>
                {this.props.description}
              </p>
            </div>
            <span className='card__length'>
              {this.props.length}
            </span>
          </div>
        </div>
      </a>
    );
  }
}
