import React from 'react';

export default class Introduction extends React.Component {
  render() {
    return (
      <div className='introduction'>
        <h1 className='h1'>{this.props.title}</h1>
        <h2 className='h2'>{this.props.subtitle}</h2>
      </div>
    );
  }
}
