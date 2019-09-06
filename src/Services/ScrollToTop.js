import React from "react";
import { withRouter } from "react-router";

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
export var ScrollToTop = withRouter(
  class ScrollToTopWithoutRouter extends React.Component {
    componentWillUnmount() {
      clearTimeout();
    }

    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 500);
      }
    }

    render() {
      return null;
    }
  }
);
