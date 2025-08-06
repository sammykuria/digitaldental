import React from 'react'

function Sidebar() {
  return (
    <div 
   className=' siedebarr  text-white p-3'
   >
      <h4 className="mb-4">Dental Admin</h4>
      <ul className="nav flex-column">

      
         
        <li className="nav-item">
          <a className="nav-link text-white" href="/">DashBoard</a>
        </li>

       
         <li className="nav-item">
          <a className="nav-link text-white bg-grey"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
           >
          Patients
          </a>
           <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href="/app">Expenses</a></li>
            <li><a className='dropdown-item' href="/app">Income</a></li>
            <li><a className='dropdown-item' href="/app">Bill List</a></li>
          </ul>
        </li>
        

          <li className="nav-item">
          <a className="nav-link text-white bg-grey"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
           >
          Appointments
          </a>
           <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href="/app">Expenses</a></li>
            <li><a className='dropdown-item' href="/app">Income</a></li>
            <li><a className='dropdown-item' href="/app">Bill List</a></li>
          </ul>
        </li>


        <li className="nav-item">
          <a className="nav-link text-white bg-grey"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
           >
          Accounts
          </a>
           <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href="/app">Expenses</a></li>
            <li><a className='dropdown-item' href="/app">Income</a></li>
            <li><a className='dropdown-item' href="/app">Bill List</a></li>
          </ul>
        </li>


        <li className="nav-item">
          <a className="nav-link text-white" href="/reports">
          Reports
          </a>
         
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/settings">Settings</a>
        </li>
      </ul>  

    </div>
  )
}

export default Sidebar
