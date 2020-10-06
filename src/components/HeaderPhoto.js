import React, { Component } from 'react';
import { yes, no } from '../objects'

class HeaderPhoto extends Component {

    state = {
        data: no,
    };

    yesBoi = () => {
       if (this.state.data["no-image"]){ 
            this.setState({
                data: yes
            })
        } else {
            this.setState({
                data: no
            })
        }

    }
    yesBoi2 = () => {
        this.setState((ps) => {
            
            if (ps.data["no-image"]) {
                return { data: yes } 
            } else {
                return { data : no }
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.data["no-statement"] ? (this.state.data["no-statement"]) : (this.state.data["yes-statement"])}</h1>
                <img 
                    src = {this.state.data["no-image"] ? (this.state.data["no-image"]) : (this.state.data["yes-image"])}
                    onClick = {this.yesBoi2}
                ></img>
            </div>
            
        )

    };
};

export { HeaderPhoto }