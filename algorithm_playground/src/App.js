import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';


class App extends React.Component {
  state = { 
    homepage: ['Data Structures', 'Basic Algorithms', 'Machine Learning']
  };
  render() { 
    return ( 
      <div className='App'>
        <center>
          <h1>Algorithm Playground</h1>
        </center>
        <CardList homepage={this.state.homepage} />
      </div>
     );
  }
}
 
export default App;

