import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import Icon from '../Components/Icon';
import { CONTACT_POINTS } from '../Services/Data';

export default class Contact extends React.Component {

  renderContactPoints() {
    const contactPoints = [];

    for (let i = 0; i < CONTACT_POINTS.length; i++) {
      if (CONTACT_POINTS[i].type === 'button') {
        contactPoints.push(
          <li key={i} className='contact-card__item contact-card__item__email'>
            <a className='button' href={CONTACT_POINTS[i].url} >
              {CONTACT_POINTS[i].title}
            </a>
          </li>
        );
      } else {
        contactPoints.push(
          <li key={i} className='contact-card__item'>
            <a className='a' href={CONTACT_POINTS[i].url}>
              <Icon color='primary' size='x-large' icon={CONTACT_POINTS[i].icon} />
              <span className='visually-hidden'>{CONTACT_POINTS[i].title}</span>
            </a>
          </li>
        );
      }
    }

    return contactPoints;
  }

  render() {
    return (
      <main className='page fade'>
        <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
        <div className='content' id='content'>
          <div className='hr' />
          <h3 className='h3'>I'd love to hear from you</h3>
          <Card>
            <div className='contact-card'>
              <h3 className='h3'>Would you like to work together?</h3>
              <h3 className='h3'>I am not actively seeking projects but would be happy to chat and/or get a cup of coffee.</h3>
              <ul className='contact-card__list'>
                {this.renderContactPoints()}
              </ul>
            </div>
          </Card>
        </div>
        <Footer />
      </main>
    );
  }
}
