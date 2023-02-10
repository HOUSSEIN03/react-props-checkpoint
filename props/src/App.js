import Profile from './profile/profile.js.js';
import pImg from '../../profilepic.jpg'; 
import "./app.css";
function App () {
  return (
    <div className="App">
    <Profile fullName="Houssein Dhaou" bio="I LOVE LIFE "       
     profession="web developer" imge={pImg} />
  </div>
  );
}

export default App;
