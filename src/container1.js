import React, { Component } from "react";
import { yes, no } from './objects'
import Page from './components1'


class Container1 extends Component {

  state = {
    apiY: yes,
    apiN: no
  }

  renderPage = () => {
    return this.state.apiY.map(el => <Page key={el.id} yes={el} />)
          

  }

  render = () => {

    return <div>{this.renderPage()}</div>;
  }
}

export default Container1;