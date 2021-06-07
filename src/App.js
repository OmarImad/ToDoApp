import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

class App extends Component{
  constructor(){
    super()
  }
  render(){
  return (
    <div className="App">
      <main>

        <div className="conteiner">
          {/* Screen */}
          <HomeScreen></HomeScreen>
        </div>

      </main> 
    </div>
  );
  }
}

export default App;
