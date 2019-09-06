import React from 'react';
import Waypoint from 'react-waypoint';

export default class AnimatedWaypoint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inView: false
    };
  }

  componentWillUnmount() {
    this.setState({
      inView: false
    });
  }

  handleWaypointEnter(currentPosition) {
    this.setState({
      inView: false
    });

    if (currentPosition === 'inside') {
      this.setState({
        inView: true
      });
    }
  }

  renderElement() {
    const classes = [
      'waypoint',
      this.state.inView ? 'waypoint--inView' : null,
      this.props.className ? this.props.className : null
    ].join(' ').trim();

    if (this.props.element) {
      return (
        <this.props.element className={classes}>
          {this.props.children}
        </this.props.element>
      );
    }

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

  render() {
    return (
      <Waypoint
        scrollableAncestor={window}
        onEnter={
          ({ currentPosition }) => {
            this.handleWaypointEnter.bind(this, currentPosition)()
          }
        }
      >
        {this.renderElement()}
      </Waypoint>
    );
  }
};
