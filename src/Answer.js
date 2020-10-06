import React, { Component } from 'react'
import { yes, no } from "./objects"

class Answer extends Component{
    state = {
        clicked: false,
        yes,
        no
    }
    clickHandler = () => {
        this.setState(prevState => ({clicked: !prevState.clicked}))
    }
    render(){
            let answer = this.state
            return(
                <div>
                    <div className="statement">{answer.clicked? answer.no['no-statement'] : answer.yes['yes-statement']}</div>
                    <div className="img-container">
                        <img className="drake" src={answer.clicked ? answer.no['no-image'] : answer.yes['yes-image']} onClick={this.clickHandler}/>
                    </div>
                </div>
                )
            
        
    }
}

export { Answer }