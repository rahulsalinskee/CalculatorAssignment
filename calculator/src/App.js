import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KeyPad from './Components/KeyPad';
import Output from './Components/Output';

class App extends Component {
  state = {
    result: ''
  }

  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate()
    }
    else if (buttonName === "cancel") {
      this.state.result = ''
      this.setState({resut: this.state.result});
    }
    else {
      this.setState({ result: this.state.result + buttonName });
    }
  };

  calculate = () => {
    this.setState({result: eval(this.state.result)})
  }

  render() {
    return (
      <div className="App">
        <Output result={this.state.result}/>
        <KeyPad buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;
