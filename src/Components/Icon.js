import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Icon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      icon: ''
    }
  }

  componentDidMount() {
    // This article details webpack magic comments used in dynamic import
    // https://medium.com/front-end-hacking/webpack-and-dynamic-imports-doing-it-right-72549ff49234

    // isMounted is an antipattern but solves the problem for this case
    // https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
    this.setState({isMounted: true});
    const iconPath = `./Icons/${this.props.icon}`;
    import(/* webpackMode: "eager" */ `${iconPath}`)
      .then(module => {
        return module.default();
      })
      .then(IconComponent => {
        if (this.state.isMounted) {
          this.setState({
            icon: IconComponent
          });
        }
      })
      .catch(() => {
        console.warn(`ICON NOT FOUND - ${this.props.icon}`)
      })
  }

  componentWillUnmount() {
    this.setState({isMounted: false});
  }

  render() {
    const classes = [
      'icon',
      this.props.size && `icon--${this.props.size}`,
      this.props.color && `icon--${this.props.color}`,
      this.props.rotate && `icon--rotate-${this.props.rotate}`,
      this.props.displayInline && 'icon--inline',
      this.props.dropShadow && 'drop-shadow',
      this.props.className,
    ];

    return (
      <span className={classNames(classes)} style={this.props.style}>
        {this.state.icon}
      </span>
    );
  }

};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'x-small',
    'small',
    'large',
    'x-large',
    null,
  ]),
  rotate: PropTypes.oneOf([
    0,
    45,
    90,
    180,
    270,
  ]),
  color: PropTypes.oneOf([
    'black',
    'white',
    'primary',
    'secondary',
    'tertiary',
    'status--success',
    'status--warning',
    'status--error',
    null,
  ]),
  className: PropTypes.string,
};

Icon.defaultProps = {
  size: null,
  rotate: null,
  color: null,
  class: null
}
