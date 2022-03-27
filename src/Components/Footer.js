import style from '../styles/components/footer.module.scss';

const Footer = props => {
  return (
    <footer className={style['footer']}>
      <span>View the <a className='a' href='http://www.github.com/canfie1d/ryancanfield.me-2019'>Source Code</a></span>
    </footer>
  );
}

export default Footer;
