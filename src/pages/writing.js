import Head from 'next/head';
import classNames from 'classnames';
import CardList from '../components/CardList';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import ArticleLink from '../components/ArticleLink';
import { ARTICLE_LINKS } from '../services/Data';
import style from '../styles/components/layout.module.scss';

const Writing = props => {
  const getCardLinks = () => {
    return ARTICLE_LINKS.map((link, i) => (
      <ArticleLink
        key={i}
        url={link.url}
        imageUrl={link.imageUrl}
        title={link.title}
        description={link.description}
        length={link.length}
      />
    ));
  }

  return (
    <>
      <Head>
        <title>Writing - Ryan Canfield</title>
      </Head>
      <main className={classNames(style['page'], 'fade')}>
        <Introduction title="My Writing." subtitle="Organized thoughts on front-end design &amp; development." />
        <div className={style['content']} id='content'>
          <div className='hr' />
          <h3 className='h3'>Selected Medium Articles</h3>
          <CardList cards={getCardLinks()} />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Writing;
