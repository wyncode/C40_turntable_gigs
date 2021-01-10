import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import FindGigs from './pages/FindGigs';
import FindDjs from './pages/FindDjs';
import Profile from './pages/Profile';
import Gigs from './pages/Gigs';
import About from './pages/About';
import GigApplication from './pages/GigApplication';
import { AppContextProvider } from './context/AppContext';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import './App.css';

function App() {
  return (
    <AppContextProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/gigs" component={FindGigs} />
            <Route exact path="/search/djs" component={FindDjs} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/gigs" component={Gigs} />
            <Route exact path="/about" component={About} />
            <Route exact path="/applygig" component={GigApplication} />
          </Switch>
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </AppContextProvider>
  );
}

export default App;
