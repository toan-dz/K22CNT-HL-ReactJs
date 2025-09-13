import React, { Component } from 'react';
import LxtEventComp from './components/LxtEventComp';
import LxtEventCompClass from './components/LxtEventCompClass';
import LxtEventForm1 from './components/LxtEventForm1';
import LxtEventForm2 from './components/LxtEventForm2';

class LxtApp extends Component {
  render() {
    return (
      <div className='container border'>
        <h1 className='text-center'> Lê Xuân Toàn <br />ReactJs - Form - Event</h1>
        <hr />

        <LxtEventComp />

        <LxtEventCompClass />

        <LxtEventForm1 />

        <LxtEventForm2 />
      </div>
    );
  }
}

export default LxtApp;