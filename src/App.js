
import './App.css';
import { Routes, Route} from 'react-router-dom';
import {Form,Home} from './Pages/index'
import {Navbar} from './Components/index'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="form" component={<Form/>}/>
        </Routes>
    </div>
  );
}
export default App;
