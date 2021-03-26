import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      minutes: 30,
      break: 5,
      total_time: 0,
    }
    this.decreaseMinutes = this.decreaseMinutes.bind(this)
  }
  inputHandler = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  startTime = () => {}
  stopTime = () => {}
  resetTime = () => {
    this.setState({ minutes: '', break: '' })
  }
  decreaseMinutes() {
    this.setState((prevState) => ({
      minutes: prevState.minutes - 1,
    }))
  }

  render() {
    return (
      <div>
        <h1>Welcome to Pomodoro</h1>
        <div>
          <button onClick={this.decreaseMinutes}>-</button>
          <h3>{this.state.minutes}</h3>
          <button onClick={this.increaseMinutes}>+</button>
          <h3>minutes</h3>

          <button onClick={this.decreaseBreak}>-</button>

          <h3>{this.state.break}</h3>
          <button onClick={this.increaseBreak}>+</button>

          <h3>break</h3>

          <br />
        </div>
        <div>
          <button onClick={this.startTime}>Start</button>
          <button onClick={this.stopTime}>Stop</button>
          <button onClick={this.resetTime}>Reset</button>
        </div>
        <div>
          <h1>The time left is: {this.state.break}</h1>
        </div>
      </div>
    )
  }
}

export default App
