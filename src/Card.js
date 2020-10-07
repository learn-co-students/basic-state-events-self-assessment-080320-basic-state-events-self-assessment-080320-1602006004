
import React from 'react'
import { yes, no } from './objects'


class Card extends React.Component {
    state = {
        yes: yes,
    }

    clickHandler = () => {
        if (this.state.yes === yes){
            this.setState({no: no})
        } else {
            this.setState({yes: yes})
        }
    }

    render() {
        return (
            <div className="container" onClick={this.clickHandler}>
                {this.state.clicked ?
                    <>
                        <h1>{this.state.yes["yes-statement"]}</h1>
                        <img alt="" src={this.state.yes["yes-image"]} />
                    </>
                    :
                    <>
                        <h1>{this.state.no["no-statement"]}</h1>
                        <img alt="" src={this.state.no["no-image"]} />
                    </>
                }

            </div>
        )
    }
}

export default Card