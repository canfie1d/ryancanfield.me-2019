import React from 'react';
import Icon from '../Components/Icon';

export default class OpenSourceList extends React.Component {
  renderNpmLink(item) {
    if (item.npmUrl) {
      return (
        <a className='a' href={item.npmUrl}>
          <Icon color='primary' icon='npm' size='x-large' />
          <span className='visually-hidden'>{`View ${item.title} on NPM`}</span>
        </a>
      );
    }
  }

  renderItems() {
    const items = this.props.items;
    const itemList = [];

    for (let i = 0; i < items.length; i++) {
      itemList.push(
        <li key={i} className='open-source__item'>
          <div className='open-source__header'>
            <h4 className='h4'>{items[i].title}</h4>
          </div>
          <a className='a' href={items[i].githubUrl}>
            <Icon color='primary' icon='github' size='x-large' />
            <span className='visually-hidden'>{`View ${items[i].title} on Github`}</span>
          </a>
          {this.renderNpmLink(items[i])}
        </li>
      );
    }

    return itemList;
  }

  render() {
    return (
      <ul className='open-source__list'>
        {this.renderItems()}
      </ul>
    );
  }
}
