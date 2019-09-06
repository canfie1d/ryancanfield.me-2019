import React from 'react';
import Icon from '../Components/Icon';

export default class DemoLink extends React.Component {
  render() {
    return (
      <a className='a demo__link' href={`http://www.codepen.io/canfie1d/full/${this.props.id}`}>
        <div className='demo__link__column'>
          <h3 className='h3 demo__title'>{this.props.title}</h3>
          <div className='demo__heart-container'>
            <Icon icon='heart' size='small' color='secondary' />
            <span className='demo__heart__quantity'>{this.props.hearts}</span>
          </div>
        </div>
        <div className='demo__link__column'>
          <div className='demo__image__wrapper'>
            <img className='demo__image' src={this.props.image} alt='' />
          </div>
        </div>
      </a>
    );
  }
}
