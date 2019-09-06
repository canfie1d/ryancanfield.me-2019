import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { Waypoint } from 'react-waypoint';

const AnimatedWaypoint = props => {
  const [inView, setInView] = useState(false);
  const [waypoint, setWaypoint] = useState('');

  useEffect(() => {
    if (waypoint && waypoint.currentPosition === 'inside') {
      setInView(true)
    } else {
      setInView(false)
      setWaypoint('')
    }
  }, [waypoint]);

  const handleWaypointEnter = waypoint => {
    setWaypoint(waypoint);
  }

  const renderElement = () => {
    const classes = [
      'waypoint',
      inView && 'waypoint--inView',
      props.className && props.className
    ];

    if (props.element) {
      return (
        <props.element className={classNames(classes)}>
          {props.children}
        </props.element>
      );
    }

    return (
      <div className={classNames(classes)}>
        {props.children}
      </div>
    );
  }

  return (
    <Waypoint
      scrollableAncestor={window}
      onEnter={waypoint => handleWaypointEnter(waypoint)}
      bottomOffset={100}
    >
      {renderElement()}
    </Waypoint>
  );
};

export default AnimatedWaypoint;
