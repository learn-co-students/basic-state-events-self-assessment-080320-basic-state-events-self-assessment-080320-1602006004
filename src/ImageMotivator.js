import React from 'react';
import { yes, no } from './objects';

class ImageMotivator extends React.Component {
  state = {
    imgSrc: yes["yes-image"],
    imgStatement: yes["yes-statement"],
    assertion: "yes"
  }

  handleClick = () => {
    if (this.state.imgSrc === yes["yes-image"]) {
      this.setState({imgSrc: no["no-image"], imgStatement: no["no-statement"], assertion: "no"});
    } else {
      this.setState({imgSrc: yes["yes-image"], imgStatement: yes["yes-statement"], assertion: "yes"});
    }
  }

  render() {
    return (
      <div className="assertion-container" id={this.state.assertion}>
        <h3 className="statement">{this.state.imgStatement}</h3>
        <div id="imgDiv">
          <img 
            className="response" 
            src={this.state.imgSrc}
            alt=''
            onClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

export default ImageMotivator;