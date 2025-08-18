import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'



// const paginationModel = { page: 0, pageSize: 10 };


function AllIncome() {
  const [income, setIncome] = useState([])
  const [expenses, setExpenses] =useState([])

   useEffect(() => {
    fetch("https://digitaldental.onrender.com/accounts")
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


  function handleDelete (id,type) {
fetch(`http://127.0.0.1:4000/accounts/${id}`, {
  method: 'DELETE',
})
  .then((res) => {
      if (res.ok) {
        if (type === "expense") {
          setExpenses((prev) => prev.filter((item) => item.id !== id));
        } else if (type === "income") {
          setIncome((prev) => prev.filter((item) => item.id !== id));
        }
      } else {
        console.error("Failed to delete account");
      }
    })
    .catch((err) => console.error("Delete error:", err));
}



  
  return (
    <div>
      
      
      {/* Income Table */}
  <div className='topper'>


      <div className='headerinput'>
         <h2 className='liveheader'>📦 Income</h2>
       
      </div>

      
      <div className='rodeo'>
       
          <Link className='addinv' to='/addaccounts'>
            + Add inventory
          </Link>
          
          <div>
            <button className='addinv'> 
              <i className="fa-solid fa-download"></i>
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
             <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {income.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
          
             <td>
              <button className='mic' onClick={() => handleDelete(item.id, "income")}>  ❌</button>
            </td>
          
            
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
       
          <Link className='addinv' to='/addaccounts'>
            + Add inventory
          </Link>
          
          <div>
            <button className='addinv'> 
              <i className="fa-solid fa-download"></i>
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
           <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>{item.description}</td>
            
          
            <td>
              <button className='mic' onClick={() => handleDelete(item.id, "expense")}>  ❌</button>
            </td>
            
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default AllIncome
