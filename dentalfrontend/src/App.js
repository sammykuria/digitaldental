import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import Sidebar from './Components/SIdebar';
import Patient from './Components/Patient';
import ChartComponent from './Components/ChartComponent';
import AddPatient from './Components/AddPatient';
import Calender from './Components/Calender';
import AddStock from './Components/AddStock';
import AllStock from './Components/AllStock';
import AllExpenses from './Components/AllExpenses'
import AddAccount from './Components/AddAccount';
function App() {
  return (
    <div className="App">
      <div className='app-container' style={{display:"flex"}}>
      <Sidebar />

     <div className='main-content' style={{ flexGrow: 1, padding: "20px"}}>
       <Routes>
      <Route path='/' element={<Home />}></Route>
       <Route path='/allpatients' element={<Patient />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addpatients' element={<AddPatient />}></Route>
      <Route path='/chart' element={<ChartComponent />}></Route>
      <Route path='/calender' element={<Calender />}></Route>
      <Route path='/allstock' element={<AllStock />}></Route>
      <Route path='/k' element={<AddStock />} />
      <Route path='/allexpenses' element={<AllExpenses />}></Route>
      <Route path='/addaccounts' element={<AddAccount />}></Route>
   
    </Routes>
     </div>
    
    </div>
     </div>
  );
}

export default App;
