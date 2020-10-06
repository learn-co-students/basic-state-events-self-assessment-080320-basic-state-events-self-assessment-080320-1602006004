import React from 'react'
import { yes, no } from './objects'

class StatementAndImg extends React.Component {
    constructor(){
        super()
        this.state = {
            yesOrNoStatement: yes['yes-statement'],
            yesOrNoImg: yes['yes-image']
        }
    }

    clickHandler = () => {
       if(this.state.yesOrNoImg === yes['yes-image']){
           this.setState({
               yesOrNoStatement: no['no-statement'],
               yesOrNoImg: no['no-image']
           })
       } else {
           this.setState({
                yesOrNoStatement: yes['yes-statement'],
                yesOrNoImg: yes['yes-image']
           })
       }
    }
    render(){
        return(
            <div style={{display: 'grid', justifyContent: 'center'}}>
                <div>
                    <h1>{this.state.yesOrNoStatement}</h1>
                </div>
                <div>
                    <img onClick={this.clickHandler} src={this.state.yesOrNoImg}alt=""></img>
                </div>
            </div>
        )
    }
}
export default StatementAndImg