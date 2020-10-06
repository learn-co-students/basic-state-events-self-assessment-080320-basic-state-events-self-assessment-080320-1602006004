import React from 'react'
// import Drake from './Drake'
import { yes, no} from './objects'

class DrakeContainer extends React.Component {

    state = {
        good: false
    }

    toggleDrake = () => {
        console.log(this.state.good)

            this.setState(prevState => ({
                good: !prevState.good}))
    }


    render() {
        console.log(no['no-statement'])
        return (
            <div onClick={this.toggleDrake}>
            {this.state.good ? <><h2>{yes['yes-statement']}</h2> <img alt="" src={yes['yes-image']}/></> : <><h2>{no['no-statement']}</h2> <img alt="" src={no['no-image']}/></>}
            {/* <h2>{`${this.state.good}`}</h2> */}
            {/* <img onClick={this.toggleDrake} alt="" src={`${this.state.good}["${this.state.good}-image"]`}/> */}
            </div>
        )
    }
}

export default DrakeContainer