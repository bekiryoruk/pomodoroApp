import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
    }
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
    this.setState([])
  }

  render() {
    return (
      <div>
        <h1>Welcome to Pomodoro</h1>
        <div>
          <h3>hours</h3>
          <input
            name='hours'
            type='text'
            placeholder='0'
            value={this.state.hours}
            onChange={this.inputHandler}
          />
          <h3>minutes</h3>
          <input
            name='minutes'
            type='text'
            placeholder='0'
            value={this.state.minutes}
            onChange={this.inputHandler}
          />
          <h3>seconds</h3>
          <input
            name='seconds'
            type='text'
            placeholder='0'
            value={this.state.seconds}
            onChange={this.inputHandler}
          />
          <br />
          <p>
            hours: {this.state.hours}, minutes: {this.state.minutes}, seconds:
            {this.state.seconds}
          </p>
          <button onClick={this.startTime}>Start</button>
          <button onClick={this.stopTime}>Stop</button>
          <button onClick={this.resetTime}>Reset</button>
        </div>
      </div>
    )
  }
}

export default App
