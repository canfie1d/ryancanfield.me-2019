import Head from 'next/head';
import classNames from 'classnames';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Icon from '../components/Icon';
import { CONTACT_POINTS } from '../services/Data';
import lStyle from '../styles/components/layout.module.scss';
import style from '../styles/components/contact-card.module.scss';

const Contact = props => {

  const renderContactPoints = () => {
    return CONTACT_POINTS.map((contact, i) => {
      if (contact.type === 'button') {
        return (
          <li key={i} className={classNames(style['contact-card__item'], style['contact-card__item__email'])}>
            <a className={style['button']} href={contact.url}>
              {contact.title}
            </a>
          </li>
        );
      } else {
        return (
          <li key={i} className={style['contact-card__item']}>
            <a className='a' href={contact.url}>
              <Icon color='primary' size='x-large' icon={contact.icon} />
              <span className='visually-hidden'>{contact.title}</span>
            </a>
          </li>
        );
      }
    });
  }

  return (
    <>
    <Head>
      <title>Contact - Ryan Canfield</title>
    </Head>
    <main className={classNames(lStyle['page'], 'fade')}>
      <Introduction title="Contact Me." subtitle="You can reach to out me in several ways." />
      <div className={lStyle['content']} id='content'>
        <div className='hr' />
        <h3 className={classNames('h3', style['h3'])}>I'd love to hear from you</h3>
        <Card>
          <div className={style['contact-card']}>
            <h3 className={classNames('h3', style['h3'])}>Would you like to work together?</h3>
            <h3 className={classNames('h3', style['h3'])}>I am actively seeking my next opportunity and would be happy to chat and/or get a cup of coffee.</h3>
            <ul className={style['contact-card__list']}>
              {renderContactPoints()}
            </ul>
          </div>
        </Card>
      </div>
      <Footer />
    </main>
    </>
  );
}

export default Contact;
