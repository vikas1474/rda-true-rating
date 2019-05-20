import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Measure from './Measures';
import MeasureList from './components/measure-list';


class App extends Component {
  render() {
    return (
      <div className="container">

        <BrowserRouter>
          <Route path='/' exact component={Measure}/>
          <Route path='/:selectedMeasure' exact component={MeasureList}/>
        </BrowserRouter>




      </div>
    );
  }
}

export default App;
