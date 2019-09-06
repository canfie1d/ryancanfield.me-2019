import React from 'react';
import CardList from '../Components/CardList';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import ArticleLink from '../Components/ArticleLink';
import { ARTICLE_LINKS } from '../Services/Data';

export default class Writing extends React.Component {
  getCardLinks() {
    let links = [];

    for (let i = 0; i < ARTICLE_LINKS.length; i++) {
      links.push(
        <ArticleLink
          key={i}
          url={ARTICLE_LINKS[i].url}
          imageUrl={ARTICLE_LINKS[i].imageUrl}
          title={ARTICLE_LINKS[i].title}
          description={ARTICLE_LINKS[i].description}
          length={ARTICLE_LINKS[i].length}
        />
      );
    };

    return links;
  }

  render() {
    return (
      <main className='page fade'>
        <Introduction title="My Writing." subtitle="Organized thoughts on front-end design &amp; development." />
        <div className='content' id='content'>
          <div className='hr' />
          <h3 className='h3'>Selected Medium Articles</h3>
          <CardList cards={this.getCardLinks()} />
        </div>
        <Footer />
      </main>
    );
  }
}
