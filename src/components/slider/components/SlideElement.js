import React, { PureComponent, Children, createElement } from 'react';
import PropTypes from 'prop-types';

class SlideElement extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  processPositioningProps(nodes) {
    return Children.map(nodes, (node) => {
      const props = {...node.props};
      const style = {};
      props.left && (style.left = props.left) && (delete props.left);
      props.top && (style.top = props.top) && (delete props.top);
      props.right && (style.right = props.right) && (delete props.right);
      props.bottom && (style.bottom = props.bottom) && (delete props.bottom);
      if (Object.keys(style).length > 0) {
        props.style = { ...props.style, ...style, position: 'absolute' };
        return createElement(node.type, props, node.props.children);
      }
      return node;
    });
  }

  render() {
    const {style={}} = this.props;
    return (<div style={style}>
      {this.props.children}
    </div>);
  }
}

export default SlideElement;
