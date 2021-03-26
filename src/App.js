import React from 'react'
import './App.css'
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
    if (this.state.work && this.state.total_time > 0) {
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
      work: this.state.total_time > 0 ? !prevState.work : prevState.work,
    }))
  }

  resetTime = () => {
    this.setState({ minutes: 0, break: 0, total_time: 0, work: false })
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
      <div className='allpage'>
        <div>
          <h1 className='welcome'>Welcome to Pomodoro</h1>
        </div>

        <div>
          <div className='breakcircle'>
            <button className='btn' onClick={this.decreaseBreak}>
              -
            </button>
            <h3 className='breaknumbertext'>{this.state.break}</h3>
            <button className='btn' onClick={this.increaseBreak}>
              +
            </button>
            <h3>Break</h3>
            <br />
          </div>
          <div className='workingcircle'>
            <button className='btn' onClick={this.decreaseMinutes}>
              -
            </button>
            <h3 className='workingnumbertext'>{this.state.minutes}</h3>
            <button className='btn' onClick={this.increaseMinutes}>
              +
            </button>
            <h3>Work</h3>
          </div>
        </div>
        <div className='timeremain'>
          <h1>
            {Math.floor(this.state.total_time / 60)}:
            {this.state.total_time % 60 === 0
              ? '00'
              : this.state.total_time % 60}
          </h1>
        </div>
        <div>
          <button className='startstopreset' onClick={this.startTime}>
            Start
          </button>
          <button className='startstopreset' onClick={this.stopTime}>
            {this.state.work ? 'Stop' : 'Continue'}
          </button>
          <button className='startstopreset' onClick={this.resetTime}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default App
