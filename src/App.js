import logo from './logo.svg';
import './App.css';
import { facebookProvider, googleProvider } from './config/authMethod';
import socialMediaAuth from './service/authe';
function App() {

const handleOnClick = async(provider)=>{
  const res = await socialMediaAuth(provider)
  console.log(res);
}

  return (
    <div className="App">
    <h3>Hostel Allocation</h3>
      <h5>Please sign-in:</h5>
      <header className="App-header">
      
      <button onClick={()=>handleOnClick (facebookProvider)}>signin with facebook</button>
      <button onClick={()=>handleOnClick (googleProvider)}>signin with google</button>
      </header>
    </div>
  );
}

export default App;
