import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'



// const paginationModel = { page: 0, pageSize: 10 };


function AllIncome() {
  const [income, setIncome] = useState([])
  const [expenses, setExpenses] =useState([])
  const[searchTerm, setSearchTerm] =useState('')

   useEffect(() => {
    fetch("http://127.0.0.1:4000/accounts")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // separate income and expenses
          setIncome(data.filter((item) => item.record_type === "income"));
          setExpenses(data.filter((item) => item.record_type === "expense"));
        } else if (Array.isArray(data.accounts)) {
          setIncome(data.accounts.filter((item) => item.record_type === "income"));
          setExpenses(data.accounts.filter((item) => item.record_type === "expense"));
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((e) => console.log("Error fetching accounts:", e));
  }, []);



  
  return (
    <div>
      
      
      {/* Income Table */}
  <div className='topper'>


      <div className='headerinput'>
         <h2 className='liveheader'>📦 Income</h2>
       
      </div>

      
      <div className='rodeo'>
        <button className='addinv' >
          <Link to='/k'>
            + Add inventory
          </Link>
          </button>
          <div>
            <button className='addinv'> 
              <i class="fa-solid fa-download"></i>
              Download(PDF)</button>
          </div>
      </div>
      </div>
      <table className="styled-table" border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount (KES)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {income.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>


          {/* Expenses Table */}
      <div className='topper'>


      <div className='headerinput'>
         <h2 className='liveheader'>📦 Expenses</h2>
       
      </div>

      
      <div className='rodeo'>
        <button className='addinv' >
          <Link to='/k'>
            + Add inventory
          </Link>
          </button>
          <div>
            <button className='addinv'> 
              <i class="fa-solid fa-download"></i>
              Download(PDF)</button>
          </div>
      </div>
      </div>


      <table className="styled-table" border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount (KES)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default AllIncome
