import React from 'react';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

export default class Card extends React.Component {
  render() {
    const classes = [
      'card__item',
      this.props.className ? this.props.className : null
    ].join(' ').trim();

    if (this.props.inList) {
      return (
        <AnimatedWaypoint element={this.props.element || 'li'} className={classes}>
          {this.props.children}
        </AnimatedWaypoint>
      );
    }

    return (
      <AnimatedWaypoint element={this.props.element || 'div'}>
        <div className={classes}>
          {this.props.children}
        </div>
      </AnimatedWaypoint>
    );
  }
}
