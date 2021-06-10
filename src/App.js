import logo from './logo.svg';
import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

function App(){

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


export default App;
