import React from 'react';
import { ToolbarPopupMenuButton, ColorPicker } from '../';

export class FontHighlightColorPlugin extends React.Component {
  static propTypes = {
    nodes: React.PropTypes.array.isRequired,
  };

  setColor(color) {
    throw new Error(`Set backColor ${color} not implemented`);
  }

  render() {
    let value = null;
    for (const node of this.props.nodes) {
      if (node.style && node.style.backgroundColor) {
        value = node.style.backgroundColor;
        break;
      }
    }

    return (
      <ToolbarPopupMenuButton
        icon="pencil"
        menu={(
          <ColorPicker
            value={value}
            onChange={::this.setColor}
            canBeTransparent
          />
        )}
        {...this.props}
      >
        <div
          className="VicoToolbarButtonColorLine"
          style={{ backgroundColor: value }}
        ></div>
      </ToolbarPopupMenuButton>
    );
  }
}
