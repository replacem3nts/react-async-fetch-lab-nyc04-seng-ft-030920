import React, { Component } from 'react'
import Astronaut from './Astronaut'

export default class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(response => {
            this.setState({ astronauts: response.people})
        })
    }
    render() {
        let astronauts = this.state.astronauts.map(astronaut => <Astronaut key={astronaut.name} astronaut={astronaut}/>)
        return (
            <div>
                <ul>
                    {astronauts}
                </ul>
            </div>
        )
    }
}

