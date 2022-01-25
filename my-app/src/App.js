
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Navigation from './Jadoo/components/Navigation';
import Booking from './Jadoo/components/Booking';
import Destination from './Jadoo/components/Destinations';
function App() {
  return (
  <Router>
  <div className='App'>
    <Routes>
      <Route path="/" exact element={<Navigation/>} >
      </Route>
      <Route path="/booking" exact element={<Booking/>} >
      </Route>
      <Route path="/destination" exact element={<Destination/>} >
      </Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
