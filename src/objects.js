import React from "react";

const yes = { "yes-image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptvy1IuxkMzOgcsR_uWucIkwE67jI04GfUg&usqp=CAU", "yes-statement": "google the answer" }
const no = { "no-image": "https://thumbs.gfycat.com/ElaborateShinyBernesemountaindog-size_restricted.gif", "no-statement": "learn problem solving, syntax, reading documentation" }


class Objects extends React.Component {

    state = {
        clicked: true
    }
    

    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }))
    }

    render() {
        return (
            <div className="objects">
                {/* <img src={this.state.clicked ? yes : no} /> */}
                <span onClick={this.clickHandler}>
                    <h1> {this.state.clicked? yes["yes-statement"] : no["no-statement"]}</h1>
                    <img alt="drake" src={this.state.clicked ? yes["yes-image"] : no["no-image"]}/>
                </span>
            </div>
        )
    }
}

export default Objects

