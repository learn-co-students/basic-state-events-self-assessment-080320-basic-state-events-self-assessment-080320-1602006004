import React from 'react';
import './App.css';
import { yes, no } from './objects'
import Card from './Card'

class App extends React.Component {
    state = {
        cardSides: [yes, no]
    }

    render(){
        return <Card cardSides={this.state.cardSides} />;
    }
}

export default App;
