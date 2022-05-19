import Blogs from './components/Blogs';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import './styling/App.css';

function App() {
  return (
    <div className="App">
      This is APP
      <Navbar/>
      <Homepage/> 
    </div>
  );
}

export default App;
