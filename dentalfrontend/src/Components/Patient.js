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





  
  return (
     <div>
      

       <div className='topper'>
      
      
            <div className='headerinput'>
               <h2 className='liveheader'>⚕️ Patients Report</h2>
               <div className='itslife'>
                <i id='life' class="fa-solid fa-magnifying-glass"></i>
                <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                 placeholder='Search inventory'></input>
               </div>
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





      <table  className="styled-table" border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Operation</th>
            <th>Payment</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td className='guitar'>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.phone}</td>
              <td>{patient.operation}</td>
              <td>{patient.payment}</td>
              <td>{patient.howmuch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Patient
