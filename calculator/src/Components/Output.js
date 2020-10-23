import React, { Component} from 'react'

export default class Output extends Component {
    render() {
        return (
            <div classname="result">
                <p>{this.props.result}</p>
            </div>
        )

    }
}