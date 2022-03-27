import Head from 'next/head';
import Introduction from '../components/Introduction';
import { classNames } from 'classnames';
import style from '../styles/components/layout.module.scss';

const Custom404 = props => {
  return (
    <>
      <Head>
        <title>404 - Ryan Canfield</title>
      </Head>
      <main className={classNames(style['page'], 'fade')}>
        <Introduction title='Page Not Found.' subtitle="Sorry, but the page you are looking for does not exist." />
      </main>
    </>
  )
}

export default Custom404;
