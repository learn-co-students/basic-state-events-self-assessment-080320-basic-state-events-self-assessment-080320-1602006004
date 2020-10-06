import React from 'react'
import { yes, no } from './objects'
class DrakeCard extends React.Component {
    state = {
        yes: yes,
        no: no,
        clicked: false
    }

    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !this.state.clicked }))
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

export default DrakeCard