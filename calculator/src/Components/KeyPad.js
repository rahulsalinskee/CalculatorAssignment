import React, { Component } from 'react'

export default class KeyPad extends Component {
    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.name)
    };

    render() {
        return (
            <div className="numbers-row">
                <table>
                    <tbody>
                        <div>
                            <tr>
                                <td>
                                    <button name="1" onClick={this.buttonPressed}>1</button>
                                </td>
                                <td>
                                    <button name="2" onClick={this.buttonPressed}>2</button>
                                </td>
                                <td>
                                    <button name="3" onClick={this.buttonPressed}>3</button>
                                </td>
                            </tr>
                        </div>

                        <div>
                            <tr>
                                <td>
                                    <button name="4" onClick={this.buttonPressed}>4</button>
                                </td>
                                <td>
                                    <button name="5" onClick={this.buttonPressed}>5</button>
                                </td>
                                <td>
                                    <button name="6" onClick={this.buttonPressed}>6</button>
                                </td>
                            </tr>
                        </div>

                        <div>
                            <tr>
                                <td>
                                    <button name="7" onClick={this.buttonPressed}>7</button>
                                </td>
                                <td>
                                    <button name="8" onClick={this.buttonPressed}>8</button>
                                </td>
                                <td>
                                    <button name="9" onClick={this.buttonPressed}>9</button>
                                </td>
                            </tr>
                        </div>

                        <div>
                            <tr>
                                <td>
                                    <button name="+" onClick={this.buttonPressed}>+</button>
                                </td>
                                <td>
                                    <button name="0" onClick={this.buttonPressed}>0</button>
                                </td>
                                <td>
                                    <button name="-" onClick={this.buttonPressed}>-</button>
                                </td>
                            </tr>
                        </div>

                        <tr>
                            <td>
                                <button name="*" onClick={this.buttonPressed}>*</button>
                            </td>
                            <td>
                                <button name="/" onClick={this.buttonPressed}>/</button>
                            </td>
                            <td>
                                <button name="=" onClick={this.buttonPressed}>=</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button name="cancel" onClick={this.buttonPressed}>cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}