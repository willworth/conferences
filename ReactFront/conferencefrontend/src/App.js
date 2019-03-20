import React, { Component } from 'react';
import Header from '../src/components/Header';
import './App.css';
import ConferenceList from "../src/components/ConferenceList"
import Shortlist from "./components/Shortlist"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ConferenceList/>
        <Shortlist/>
      </div>
    );
  }
}

export default App;
