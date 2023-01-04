import React from 'react'
import SimpleInt from './Components/SimpleInterest/SimpleInt';
import CompoundInt from './Components/CompoundInterest/CompoundInt';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' element={<SimpleInt/>} />
          <Route path='/compound' element={<CompoundInt/>} />
          {/* <Route path='/home' element={<Home/>} /> */}
          
 
        </Routes>
      </Router>
     {/* <SimpleInt/> */}
    </div>
  );
}

export default App;
