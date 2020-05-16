import React, { PureComponent } from 'react'

export default class Astronaut extends PureComponent {
    render() {
        let {name, craft} = this.props.astronaut
        return (
            <div>
                <li>
                    <h3>Name: {name}</h3>
                    <p>Craft: {craft}</p>
                </li>
            </div>
        )
    }
}
