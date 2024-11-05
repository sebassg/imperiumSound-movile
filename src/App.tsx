import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import "./App.css";
import Register from './pages/register/Register';
import RegistroSonoroIndex from './pages/registroSonoro/RegistroSonoroIndex.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registrosSonoros' element={<RegistroSonoroIndex />} />
      </Routes>
    </Router>
  );
}

export default App;
