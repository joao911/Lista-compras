import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './App.css';
import Header from './commom/Header'
import Home from './home'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#f44336'
    },
  }
})
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header/>
        <Home/>
      </MuiThemeProvider>
    )
  }
}

export default App;
