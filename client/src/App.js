import React, { Component } from 'react'
import './App.css'

import BookList from './components/BookList.js'

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>The app</h1>  
        <BookList />
      </div>
    )
  }
}

export default App
