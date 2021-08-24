import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Contact from './Contact';
import Menu from './Menu'
import About from './About';
import Location from './Location';

const Routes = () => {
  return (
    <Switch>
      <Route path='/contact'>
          <Contact/>
        </Route>
      <Route path='/about'>
          <About/>
        </Route>
      <Route path='/location'>
          <Location/>
        </Route>
      <Route path='/menu'>
          <Menu/>
        </Route>
    </Switch>
  );
}

export default Routes;