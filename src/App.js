// import React from 'react';
import React, { Component } from 'react'
import './App.css';

import { no, yes } from './objects'

import Image from './components/statement.js';
import Statement from './components/statement.js'

export default class App extends Component {
  render() {
    return (
      <>
      {/* <h1><Statement yes = {yes["yes-statement"]} no = {no["no-statement"]}  /></h1> */}
        <div>
          <Statement yes = {yes["yes-image"]} no = {no["no-image"]} yesAlt = {yes["yes-statement"]} noAlt = {no["no-statement"]}
          yesStatment = {yes["yes-statement"]} noStatment = {no["no-statement"]}
          />       
        </div>
      </>
    )
  }
}


