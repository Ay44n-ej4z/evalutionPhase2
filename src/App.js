import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileList from './components/ProfileList';

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <h1 style = {{color: 'black', padding: '30px'}}> Assignment </h1>
        <ProfileList/>      
        
      </header>
    </div>
  );
}

export default App;
