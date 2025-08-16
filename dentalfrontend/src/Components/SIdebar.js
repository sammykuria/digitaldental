import React from 'react'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div 
   className=' siedebarr  text-white p-3'
   >
      <h4 className="mb-4"> Admin</h4>
      <ul className="nav flex-column">

      
      <div className='juicwrld'>
        <p>MAIN</p>
      </div>
         
        <li className="nav-item">
          <div className='iconcontainer'>
             
             <Link className="nav-link text-white bg-grey"
                id='oj'
                to="/"
                >
                DashBoard
                </Link>
           </div>  
          </li>

       
         <li className="nav-item">
              
                <Link className="nav-link dropdown-toggle text-white bg-grey"
          id='oj'
          // to="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
           >
          Patients
          </Link>
           
           <ul className='dropdown-menu'>
            <li><Link className='dropdown-item' to="/allpatients">All Patients</Link></li>
            <li><Link className='dropdown-item' to="/addpatients">Add Patients</Link></li>
          </ul>
        </li>
        

       <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white bg-grey"
              to="#"
              id='oj'
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Appointments
            </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/calender">Appointment Calendar</Link></li>
            <li><Link className="dropdown-item" to="/app">View Appointment</Link></li>
            <li><Link className="dropdown-item" to="/app">Book Appointment</Link></li>
          </ul>
        </li>



        <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white bg-grey"
              to="#"
              id='oj'
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Accounts
            </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/allexpenses">All Accounts</Link></li>
            <li><Link className="dropdown-item" to="/addaccounts">Add Accounts</Link></li>
          </ul>
        </li>




          <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-white bg-grey"
            to="#"
            id='oj'
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Inventory
          </Link>
        <ul className='dropdown-menu'>
                  <li><Link className='dropdown-item' to="/allstock">Item Stock List</Link></li>
                  <li><Link className='dropdown-item' to="/k">Add New Stock</Link></li>
                </ul>
              </li>



        <div className='juicwrld'>
          <p>CATALOG</p>
        </div>

         <li className="nav-item">
          <Link id='oj' className="nav-link text-white" to="/reports">
          Doctors
          </Link>
         
        </li>
        <li className="nav-item">
          <Link id='oj' className="nav-link text-white" to="/settings">Staff</Link>
        </li>

         <div className='juicwrld'>
          <p>HELP & SETTINGS</p>
        </div>


         <li className="nav-item">
          <Link id='oj' className="nav-link text-white" to="/settings">
          Settings
          </Link>
         
        </li>
        <li className="nav-item">
          <Link id='oj' className="nav-link text-white" to="/help">Help Centre</Link>
        </li>




      </ul>  

    </div>
  )
}

export default Sidebar
