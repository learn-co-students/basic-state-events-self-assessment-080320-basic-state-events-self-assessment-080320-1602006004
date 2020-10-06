import React from 'react';
import { yes, no } from './objects';

console.log(yes["yes-image"])
class HomePage extends React.Component {

    state = {
        clicked: true
    }

    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }

    render(){
        
        return (
            <div>
                {this.state.clicked ?  <h1>{yes["yes-statement"]}</h1>  : <h1>{no["no-statement"]}</h1> }
                    <div onClick={this.clickHandler}>
                    {this.state.clicked ? <img alt="" src={yes["yes-image"]} /> : <img alt="" src={no["no-image"]} /> }
                    </div>
            </div>
        )

    }



}




export default HomePage;