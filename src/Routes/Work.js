import React from 'react';
import Introduction from '../Components/Introduction';
import Footer from '../Components/Footer';
import OpenSourceList from '../Components/OpenSourceList';
import CardList from '../Components/CardList';
import TagList from '../Components/TagList';
import Card from '../Components/Card';
import DemoLink from '../Components/DemoLink';
import { CLIENTS, DEMOS, OPEN_SOURCE } from '../Services/Data';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

export default class Work extends React.Component {
  // renderProjectList() {
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

  getDemoList() {
    const demoList = [];

    for (let i = 0; i < DEMOS.length; i++) {
      demoList.push(
        <Card key={DEMOS[i].title}>
          <DemoLink
            id={DEMOS[i].id}
            title={DEMOS[i].title}
            image={DEMOS[i].image}
            hearts={DEMOS[i].hearts}
          />
        </Card>
      );
    }

    return demoList;
  }

  render() {
    return (
      <main className='page fade'>
        <Introduction title="My Work." subtitle="A selection of projects, demos &amp;&nbsp;clients." />
        <div className='content' id='content'>
          <div className='hr' />
          <h3 className='h3'>Interface Demos</h3>
          <CardList cards={this.getDemoList()} />
          {/*<div className='hr' />
          <h3 className='h3'>Selected Projects</h3>
          {this.renderProjectList()}*/}
          <div className='content__split'>
            <AnimatedWaypoint className='content__split__column'>
              <div className='hr' />
              <h3 className='h3 client__list__header'>Companies I've worked with</h3>
              <TagList tags={CLIENTS} />
            </AnimatedWaypoint>
            <AnimatedWaypoint className='content__split__column'>
              <div className='hr' />
              <h3 className='h3'>Open source projects</h3>
              <OpenSourceList items={OPEN_SOURCE} />
            </AnimatedWaypoint>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}
