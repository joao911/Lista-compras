import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Header from './commom/Header'
import Home from './home/home'
import CreateList from './CreateList'


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
        <Router>

          <div>
            <Header />
            <Switch>

              <Route exact path='/' component={Home} />
              <Route path='/lista' component={CreateList} />
            </Switch>
          </div>

        </Router>


      </MuiThemeProvider>
    )
  }
}

export default App;
