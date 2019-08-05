import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage';
import DataStruct from './pages/datastruct/datastruct'
import Example from './pages/stack/stack';




class App extends React.Component {
  render() { 
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/ds' component={DataStruct} />
          <Route exact path='/ds/stack' component={Example} />
        </Switch>
      </div>
    );
  }
}
 
export default App;

