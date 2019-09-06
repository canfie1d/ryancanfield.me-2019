import React from 'react';

export default class TagList extends React.Component {
  renderList() {

    const list = [];

    for (let i = 0; i < this.props.tags.length; i++) {
      if (this.props.tags[i].url) {
        list.push(
          <li key={this.props.tags[i].title} className='tag__item tag__item--hasLink'>
            <a href={this.props.tags[i].url} className='a tag__link'>{this.props.tags[i].title}</a>
          </li>
        );
      } else {
        list.push(
          <li key={this.props.tags[i].title} className='tag__item'>
            {this.props.tags[i].title}
          </li>
        );
      }
    }

    return list;
  }

  render() {
    return (
      <ul className='tag__list'>
        {this.renderList()}
      </ul>
    );
  }
}
