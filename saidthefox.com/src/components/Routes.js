import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Contact from './Contact';
import Menu from './Menu';
import About from './About';
import Location from './Location';
import Home from './Home';
import Content from './Content';

const Routes = () => {
  return (
    <Switch>
      <Route path='/'>
          <Content/>
      </Route>
      <Route path='/contact'>
          <Content/>
        </Route>
      <Route path='/about'>
          <Content/>
        </Route>
      <Route path='/location'>
          <Content/>
        </Route>
      <Route path='/menu'>
          <Content/>
        </Route>
    </Switch>
  );
}

export default Routes;