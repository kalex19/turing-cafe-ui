import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ResyForm.css';


export default class ResyForm extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      date: '',
      time: '',
      numberOfGuests:1
    }
  }


handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = e => {
  e.preventDefault()
  this.props.makeReservation(this.state)
}



  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className='submitForm'>
      <input name='name' placeholder="Name" value={this.state.name} type='text' onChange={this.handleChange} className="resInput"/>
      <input name='date' placeholder="Date mm/dd" value={this.state.date} type='text'onChange={this.handleChange} className="resInput"/>
      <input name='time' placeholder="Time" value={this.state.time} type='text'onChange={this.handleChange} className="resInput"/>
      <input name='numberOfGuests' placeholder="Number of guests" value={this.state.numberOfGuests} type='number' onChange={this.handleChange} className="resInput"/>
      <input type='submit' value="Make Reservation" className='resBtn'/>
      </form>
      </div>
      )
  }
}

