import './App.css';
import Mapcontents from './MapContent';
// import KaKaoMap from "./Mapcontents";

class App extends Mapcontents {
  render() {
    return (
      <div className="App">
        <Mapcontents />
      </div>
    );
  }
}

export default App;