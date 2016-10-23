import React from 'react';
import { ToolbarButton } from './';

export class ToolbarPopupMenuButton extends React.Component {
  static propTypes = {
    menu: React.PropTypes.node.isRequired,
    children: React.PropTypes.node,
    onClick: React.PropTypes.func,
  };

  state = {
    show: false,
  };

  onClick(e) {
    const { onClick } = this.props;

    this.setState({ show: !this.state.show });

    if (typeof onClick === 'function') {
      onClick(e);
    }
  }

  render() {
    return (
      <ToolbarButton
        {...this.props}
        onClick={::this.onClick}
      >
        {this.props.children}
        {this.state.show && (
          <div className="VicoToolbarButtonMenu">
            {this.props.menu}
          </div>
        )}
      </ToolbarButton>
    );
  }
}
