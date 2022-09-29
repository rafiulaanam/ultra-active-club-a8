import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideProfile from './components/SideProfile/SideProfile';

function App() {
  return (
    <div className="App">
     <div className='main'>
     <Header></Header>
     <Main></Main>
     </div>
     <div>
      <SideProfile></SideProfile>
     </div>
    </div>
  );
}

export default App;
