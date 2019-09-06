import React from 'react';
import Nav from './Navigation';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className='h1'>Ryan Canfield</h1>
        <Nav />
      </header>
    );
  }
}
