import React, { Component } from "react";

class Page extends Component {

    state = {
      clicked: true
    }

    clickHandler = () => {
      console.log("hello")
      this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }

    render() {
      return (
        <div>
          <h2>{this.props.yes.yesstatement}</h2>
          <img onClick={this.clickHandler} alt="" src={this.props.yes.yesimage} />
          <span className="bark" onClick={this.clickHandler}>
          <button>Bark</button>
          </span>
          {this.state.clicked ? <h2>Bark</h2> : null}
        </div>
      );
    }
  }


export default Page;