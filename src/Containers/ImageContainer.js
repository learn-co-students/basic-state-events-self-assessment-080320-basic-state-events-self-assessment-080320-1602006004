import React from 'react';
//import { render } from '@testing-library/react';
import { yes, no } from '../objects.js'
class ImageContainer extends React.Component {

 state = {
  yes: yes,
  no: no,
  clicked: false
 }
 clickHandler = () => {
  this.setState((currentState) => ({ clicked: !this.state.clicked }))
 }
 helperFunction = () => {
  if ({ this.state.clicked }) {
   <>
    <h1> {this.state.yes["yes-statement"]}</h1>
    <img alt="" src={this.state.yes["yes-image"]} />
   </>
  } else {
   <>
    <h1> {this.state.no["no-statement"]}</h1>
    <img alt="" src={this.state.no["no-image"]} />
   </>
  }

 }



 render() {
  return (
   <>
    <div onClicked={this.clickHandler} className="container">
     {this.helperFunction()}
    </div>
   </>
  )
 }
}

export default ImageContainer