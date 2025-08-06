import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Sidebar from './Components/SIdebar';
import Patient from './Components/Patient';
import ChartComponent from './Components/ChartComponent';



function App() {
  return (
    <div className="App">
      <div className='app-container' style={{display:"flex"}}>
      <Sidebar />

     <div className='main-content' style={{ flexGrow: 1, padding: "20px"}}>
       <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/patients' element={<Patient />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/chart' element={<ChartComponent />}></Route>
    </Routes>
     </div>
    
    </div>
     </div>
  );
}

export default App;
