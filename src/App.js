import './App.css';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
