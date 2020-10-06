import React, { Component } from 'react'


export default class Statement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             statement: true
        }
    }
    
    handlestatement = (event) => {
        (this.state.statement === true) ? this.setState({statement: false}) : this.setState({statement: true})
    }
    
    render() {
        return (
            <>
            <h1 >
                ({this.state.statement ? this.props.yesStatment : this.props.noStatement})
            </h1>
            <div onClick = {this.handlestatement}>
                <img src = {this.state.statement ? this.props.yes : this.props.no} 
                    alt = {this.state.statement ? this.props.altYes : this.props.altNo} >
                </img>
            </div>
            </>
        )
    }
}
