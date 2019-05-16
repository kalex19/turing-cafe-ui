import React, { Component } from 'react';
import './App.css';
import ResyForm from './ResyForm';
import ResyContainer from './ResyContainer';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

componentDidMount() {
  this.fetchResverations()
}


fetchResverations = async () => {
  try{
  const response =  await fetch('http://localhost:3001/api/v1/reservations')
  const results = await response.json()
  this.setState({
    reservations: results
  })
  }
  catch(error){
   this.setState({
    error: error
   })
  }
}

makeReservation = async (res) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/reservations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(res)
            })
    const reservation = await response.json()
    this.setState({
      reservations: [...this.state.reservations, reservation]
    })
  }
  catch(error){
    this.setState({
      error:error
    })
  }
}


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResyForm makeReservation={this.makeReservation}/>
        </div>
        <div className='resy-container'>
          <ResyContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;






//fetch existing reservations