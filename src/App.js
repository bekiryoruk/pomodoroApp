import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      minutes: 30,
      break: 5,
      total_time: 1800,
      work: false,
    }
    this.decreaseMinutes = this.decreaseMinutes.bind(this)
    this.increaseMinutes = this.increaseMinutes.bind(this)
    this.decreaseBreak = this.decreaseBreak.bind(this)
    this.increaseBreak = this.increaseBreak.bind(this)
    this.timer = this.timer.bind(this)
  }
  timer() {
    if (this.state.work) {
      this.setState({
        total_time: this.state.total_time - 1,
      })
      if (this.state.total_time < 1) {
        clearInterval(this.intervalId)
      }
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  startTime = () => {
    this.setState((prevState) => ({
      total_time: prevState.minutes * 60,
      work: true,
    }))
  }
  stopTime = () => {
    this.setState((prevState) => ({
      work: false,
    }))
  }
  resetTime = () => {
    this.setState({ minutes: 0, break: 0 })
  }
  decreaseMinutes() {
    this.setState((prevState) => ({
      minutes: prevState.minutes - 1,
    }))
  }
  increaseMinutes() {
    this.setState((prevState) => ({
      minutes: prevState.minutes + 1,
    }))
  }
  decreaseBreak() {
    this.setState((prevState) => ({
      break: prevState.break - 1,
    }))
  }
  increaseBreak() {
    this.setState((prevState) => ({
      break: prevState.break + 1,
    }))
  }
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to Pomodoro</h1>
        </div>
        <div>
          <button onClick={this.decreaseBreak}>-</button>
          <h3>{this.state.break}</h3>
          <button onClick={this.increaseBreak}>+</button>
          <h3>break</h3>
          <br />
        </div>
        <div>
          <button onClick={this.decreaseMinutes}>-</button>
          <h3>{this.state.minutes}</h3>
          <button onClick={this.increaseMinutes}>+</button>
          <h3>working</h3>
        </div>
        <div>
          <button onClick={this.startTime}>Start</button>
          <button onClick={this.stopTime}>Stop</button>
          <button onClick={this.resetTime}>Reset</button>
        </div>
        <div>
          <h1>
            The time left is: {Math.floor(this.state.total_time / 60)}:
            {this.state.total_time % 60}
          </h1>
        </div>
      </div>
    )
  }
}

export default App
