import { Component } from 'react';
import './App.css';
import Map from './Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>KaKao Maps</h1>
        <Map />
      </div>
    );
  }
}

export default App;