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
        
        if (!this.state.clicked){
            let answer = this.state.no
            console.log(answer["no-image"])
            return(
                <div>
                    <div>{answer['no-statement']}</div>
                    <img src={answer["no-image"]} onClick={this.clickHandler}/>
                </div>
                )
            }else{
                let answer = this.state.yes
                return (
                    <h1>    
                    <div>{answer['yes-statement']}</div>
                        <img src={answer["yes-image"]} onClick={this.clickHandler}/>
                </h1>
            )
        }
        
    }
}

export { Answer }