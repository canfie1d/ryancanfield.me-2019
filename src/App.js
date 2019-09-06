import React from 'react';
import Header from './Components/Header';
import Routes from './Routes';
import { ScrollToTop } from './Services/ScrollToTop';
import './App.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <ScrollToTop />
        <div className='l'>
          <div className='l--rightColumn'>
            <a className='visually-hidden' href="#content">Skip to content</a>
            <Header />
          </div>
          <div className='l--leftColumn'>
            <Routes {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
