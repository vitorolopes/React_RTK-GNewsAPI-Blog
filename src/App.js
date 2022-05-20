import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import './styling/App.css';
import { useSelector } from 'react-redux';


function App() {

  const {isSignedIn} = useSelector( store => store.user)

  return (
    <div className="App">
      <Navbar/>
      {isSignedIn ? <Blogs/> :  <Homepage/> }
     
      
    </div>
  );
}

export default App;
