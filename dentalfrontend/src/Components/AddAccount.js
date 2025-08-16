import React from 'react'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
function AddAccount() {

  const [loading ,setLoading] = useState(false)
  const navigate = useNavigate()
   const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    record_type: "income",
    date: "",
    category: "",
    amount: "",
    description: "",
  });

  const handleChange = (e)=> {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
 fetch("http://127.0.0.1:4000/accounts", {
    method:'POST',
   body: JSON.stringify({ account: formData, }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })


  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not okay'  + response.statusText)
    }
    return response.json()
     
  })
  .then(data => {
    console.log('Account created', data)
     alert('Accounts added successfully.');
navigate('/allexpenses')    
  })
  .catch(error =>{
    console.error('There was a problem with fecth', error)
  })
  .finally(() => {
    setLoading(false); // hide loader
  });

    // Create the new record from formData
  const newRecord = {
    ...formData,           // copy all the fields from formData
    amount: parseFloat(formData.amount), // make sure amount is a number
    id: Date.now()         // unique ID
  };

   

    if (formData.record_type === "income") {
      setIncome([...income, newRecord]);
    } else {
      setExpenses([...expenses, newRecord]);
    }

    // Reset form
    // setFormData({
    //   type: "income",
    //   date: "",
    //   category: "",
    //   amount: "",
    //   description: "",
    // });
  };

  return (
  <div className="accounts">
      <h2>Accounts</h2>

         {loading ? (
      <div className="loader">
        <span className="l">L</span>
        <span className="o">o</span>
        <span className="a">a</span>
        <span className="d">d</span>
        <span className="i">i</span>
        <span className="n">n</span>
        <span className="g">g</span>
        <span className="d1">.</span>
        <span className="d2">.</span>
      </div>
    ) : ( 

      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <select
        name='record_type'
          value={formData.record_type}
          onChange={handleChange}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label>Date:</label>
        <input
         name='date'
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Category:</label>
        <input
         name='category'
          type="text"
          placeholder="e.g. Consultation, Materials"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <label>Amount (KES):</label>
        <input
         name='amount'
          type="number"
          step="0.01"
          value={formData.amount}
         onChange={handleChange}
          required
        />

        <label>Description:</label>
        <input
         name='description'
          type="text"
          placeholder="Optional"
          value={formData.description}
        onChange={handleChange}
        />

        <button className='submitbutton' type="submit">Add Record</button>
      </form>
  )}
    </div>
    
  );
}

export default AddAccount
