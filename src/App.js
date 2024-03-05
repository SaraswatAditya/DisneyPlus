import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login';
import Header from './Component/Header';
import Home from './Component/Home';
import Details from './Component/Details';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Details/>}/>
      </Routes>
    </Router>
  );
}

export default App;
