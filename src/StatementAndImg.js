import React from 'react'
import { yes, no } from './objects'

class StatementAndImgContainer extends React.Component {
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
    //on click we want to reset state to no and no img and toggle
    render(){
        return(
            <div>
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
export default StatementAndImgContainer