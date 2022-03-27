import Head from 'next/head';
import classNames from 'classnames';
import Introduction from '../components/Introduction';
import Footer from '../components/Footer';
import OpenSourceList from '../components/OpenSourceList';
import CardList from '../components/CardList';
import TagList from '../components/TagList';
import Card from '../components/Card';
import DemoLink from '../components/DemoLink';
import { CLIENTS, DEMOS, OPEN_SOURCE } from '../services/Data';
import AnimatedWaypoint from '../components/AnimatedWaypoint';
import style from '../styles/components/layout.module.scss';

const Work = props => {
  // const renderProjectList = () => {
  //   const PROJECTS = [
  //     {
  //       title: "",
  //       url: "",
  //       description: "",
  //       image: ""
  //     },
  //     {
  //       title: "",
  //       url: "",
  //       description: "",
  //       image: ""
  //     }
  //   ];

  //   const projectList = [];

  //   for (let i = 0; i < PROJECTS.length; i++) {
  //     projectList.push(
  //       <Card key={i}>
  //         <div className='project'>
  //           <div className='project__column'>
  //             <h3 className='h3 project__title'>{PROJECTS[i].title}</h3>
  //             <p className='p'>{PROJECTS[i].description}</p>
  //             <a className='button'>Visit Site</a>
  //           </div>
  //           <div className='project__column'>
  //             <div className='project__image__wrapper'>
  //               <img className='project__image' src={PROJECTS[i].image} alt='' />
  //             </div>
  //           </div>
  //         </div>
  //       </Card>
  //     );
  //   }

  //   return projectList;
  // }

  const getDemoList = () => {
    return DEMOS.map((demo, i) => (
      <Card key={`${demo.title}-${i}`}>
        <DemoLink
          id={demo.id}
          title={demo.title}
          image={demo.image}
          hearts={demo.hearts}
        />
      </Card>
    ));
  }

  return (
    <>
      <Head>
        <title>Work - Ryan Canfield</title>
      </Head>
      <main className={classNames(style['page'], 'fade')}>
        <Introduction title="My Work." subtitle="A selection of projects, demos &amp;&nbsp;clients." />
        <div className={style['content']} id='content'>
          <div className='hr' />
          <h3 className='h3'>Interface Demos</h3>
          <CardList cards={getDemoList()} />
          {/*<div className='hr' />
          <h3 className='h3'>Selected Projects</h3>
        {renderProjectList()}*/}
          <div className={style['content__split']}>
            <AnimatedWaypoint className={style['content__split__column']}>
              <div className='hr' />
              <h3 className={classNames('h3', style['client__list__header'])}>Companies I've worked with</h3>
              <TagList tags={CLIENTS} />
            </AnimatedWaypoint>
            <AnimatedWaypoint className={style['content__split__column']}>
              <div className='hr' />
              <h3 className='h3'>Open source projects</h3>
              <OpenSourceList items={OPEN_SOURCE} />
            </AnimatedWaypoint>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Work;
