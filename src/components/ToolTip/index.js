import React, { Component, Fragment, createRef } from 'react';
import './tooltip.scss';
import '../columns.scss';
import toolTipImage from './receipt-placeholder.png';

class ToolTip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToolTip: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.setToolTipPosition = this.setToolTipPosition.bind(this);
  }

  handleClick(e) {
    this.setToolTipPosition();
    this.setState({showToolTip: !this.state.showToolTip});
  }

  setToolTipPosition() {
    let triggerWidth = this.toolTipTrigger.offsetWidth;
    let toolTipWidth = this.toolTipWindow.offsetWidth;
    let triggerLeftOffset = this.toolTipTrigger.offsetLeft;
    let offsetWindow = Math.ceil((triggerLeftOffset + (triggerWidth / 2)) - (toolTipWidth / 2 ));
    this.toolTipWindow.style.left = offsetWindow + 'px';
  }

  render() {
    return (
      <Fragment>
        <span href="#tool-tip"  onClick={this.handleClick} ref={(ref) => this.toolTipTrigger = ref } className="tool-tip-trigger">Where's my PIN?</span>
        <div id="#tool-tip" ref={ (ref) => this.toolTipWindow = ref } className={`tool-tip-window columns ${this.state.showToolTip ? "" : "hidden"}`}>
          <button onClick={this.handleClick}className="close-button hide-text">close</button>
          <div className="top-arrow">▲</div>
          <div className="columns">
            <div className="column is-one-quarter">
              <img width="75" src={toolTipImage} />
            </div>
              <div className="column is-three-quarters">
              <h1 className="tool-tip-header">Your PIN is on your Walmart receipt.</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export { ToolTip };
