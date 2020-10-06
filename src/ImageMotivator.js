import React from 'react';
import { yes, no } from './objects';

class ImageMotivator extends React.Component {
  state = {
    imgSrc: yes["yes-image"],
    imgStatement: yes["yes-statement"]
  }

  handleClick = () => {
    if (this.state.imgSrc === yes["yes-image"]) {
      this.setState({imgSrc: no["no-image"], imgStatement: no["no-statement"]});
    } else {
      this.setState({imgSrc: yes["yes-image"], imgStatement: yes["yes-statement"]});
    }
  }

  render() {
    return (
      <div>
        <h3>{this.state.imgStatement}</h3>
        <img 
          src={this.state.imgSrc}
          alt=''
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default ImageMotivator;