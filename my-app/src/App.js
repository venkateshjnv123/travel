
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Navigation from './Jadoo/components/Navigation';
function App() {
  return (
  <Router>
  <div className='App'>
    <Routes>
      <Route path="/" exact element={<Navigation/>} >
      </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
