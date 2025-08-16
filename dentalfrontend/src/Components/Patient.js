import React, {useState,useEffect} from 'react'
import { Link} from 'react-router-dom'





function Patient() {
    const [patients, setPatients] = useState([])
     const[searchTerm, setSearchTerm] =useState('')
    

    useEffect(() => {
      fetch('http://127.0.0.1:4000/patients')
      .then(res => res.json())
         .then(data => {
        // If backend returns an object, adjust accordingly
        if (Array.isArray(data)) {
          setPatients(data);
        } else if (Array.isArray(data.patients)) {
          setPatients(data.patients);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch(e => console.log('error fetching patients:', e))
    },[])


        const filteredPatients = patients.filter(stock =>
  (stock.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
  (stock.operation || "").toLowerCase().includes(searchTerm.toLowerCase())
);


function handleDelete (id) {
fetch(`http://127.0.0.1:4000/patients/${id}`, {
  method: 'DELETE',
})
   .then(res => {
      if (res.ok) {
        // remove patient from state so UI updates immediately
        setPatients(prev => prev.filter(patient => patient.id !== id));
      } else {
        console.error("Failed to delete patient");
      }
    })
    .catch(err => console.error("Delete error:", err));
}


  
  return (
     <div>
      

       <div className='topper'>
      
      
            <div className='headerinput'>
               <h2 className='liveheader'>⚕️ Patients Report</h2>
               <div className='itslife'>
                <i id='life' className="fa-solid fa-magnifying-glass"></i>
                <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder='Search inventory'></input>
               </div>
            </div>
      
            
            <div className='rodeo'>
             
                <Link className='addinv' to='/addpatients'>
                  + Add Patients
                </Link>
               
                <div>
                  <button className='addinv'> 
                    <i className="fa-solid fa-download"></i>
                    Download(PDF)</button>
                </div>
            </div>
            </div>





      <table  className="styled-table" border="1" cellPadding="5">
        <thead>
          <tr>
            <td>ID</td>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Operation</th>
            <th>Payment</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient => (
            <tr key={patient.id}>
              <td>{String(patient.id)}</td>
              <td>{String(patient.name)}</td>
              <td className='guitar'>{patient.age}</td>
              <td>{String(patient.gender)}</td>
              <td>{String(patient.phone)}</td>
              <td>{String(patient.operation)}</td>
              <td>{String(patient.payment)}</td>
              <td>{String(patient.howmuch)}</td>
             <td> <button className='mic' onClick={() => handleDelete(patient.id)}>
              ❌
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Patient
