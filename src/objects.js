import React from 'react';

class Objects extends React.Component {

     state = {
          image: yes || no
     }

     clickHandler = () => {
          this.setState((prevState) => ({clicked: !prevState.clicked}))
          // show yes/no statement/image
     }

     render(){
          return (
          < img src=  onClick={this.clickHandler}
          
          {this.state.yes ? }
          />
          
          )
     }
}

export { yes, no }