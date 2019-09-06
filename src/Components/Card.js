import React from 'react';
import AnimatedWaypoint from '../Containers/AnimatedWaypoint';

const Card = props => {
  const classes = [
    'card__item',
    props.className ? props.className : null
  ].join(' ').trim();

  if (props.inList) {
    return (
      <AnimatedWaypoint element={props.element || 'li'} className={classes}>
        {props.children}
      </AnimatedWaypoint>
    );
  }

  return (
    <AnimatedWaypoint element={props.element || 'div'}>
      <div className={classes}>
        {props.children}
      </div>
    </AnimatedWaypoint>
  );
}

export default Card;
