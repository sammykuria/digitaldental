import { useState } from 'react'
function AddPatient() {
  const [formData, setFormData] = useState({
    name:"",
    age:"",
    phone:'',
    gender:"",
    operation:"",
    payment:'',
    howmuch:''
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

const handleSubmit = (e)=>{
  e.preventDefault()
  fetch("https://digitaldental.onrender.com/patients", {
    method:'POST',
    body: JSON.stringify({ patient: formData}),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  })
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not okay'  + response.statusText)
    }
    return response.json()
  })
  .then(data => {
    console.log('Patient created', data)
  })
  .catch(error =>{
    console.error('There was a problem with fecth', error)
  })

   // Reset form
    setFormData({
    name:"",
    age:"",
    phone:'',
    gender:"",
    operation:"",
    payment:'',
    howmuch:''
    });
}





  return (
    <div className='patientt'>

            <div className='yee'>
             <h2>Add  Patients</h2>

            </div>
          
        
        <div>
            <label className="cyberpunk-checkbox-label">
            <input type="checkbox" className="cyberpunk-checkbox" value="new"/>
            New Patient</label>
        </div>
           <label className="cyberpunk-checkbox-label">
            <input type="checkbox" className="cyberpunk-checkbox" value="old"/>
            Old Patient</label>


        <div className='formcontainer'>

            <form onSubmit={handleSubmit}>
               <div  className='form-row' >


                <div className='fullname'>
                <label  htmlFor="fullName" >
                    Full Name
                </label>
                <input type="text" id="phone" placeholder="Enter full name" 
               name="name" 
               value={formData.name}
                onChange={handleChange}
                />
                
                </div>



                 <div className='fullname'>
                <label  htmlFor="fullName" >
                   Age
                </label>
                <input type="number" id="phone" placeholder="Enter Patient Age"
                 name="age"
                value={formData.age}
                onChange={handleChange}
                />
                
                </div>


                <div className='fullname'>
                    <label  htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter phone number"
                    name="phone"
                      value={formData.phone}
                    onChange={handleChange}/>
                    </div>



                 <div className='fullname'>
                  <label  htmlFor="phone">Gender</label>
                     <select required
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                </div>

                
               

                  <div className='fullname'>
                <label  htmlFor="phone">Treatment</label>
                <input type="text" id="phone" placeholder="Enter Treatment"
                 name="operation"
                  value={formData.operation}
                 onChange={handleChange}
                />
                </div>
                
                </div>

             
            
              <div className='fullname'>
               <label>Payment Type:</label>
              <input
                type="text"
                name="payment"
                value={formData.payment}
                onChange={handleChange}
              />
              </div>

              <div className='fullname'>
              <label>Amount (KES):</label>
              <input
                type="number"
                name="howmuch"
                value={formData.howmuch}
                onChange={handleChange}
              />
              </div>



                

               
                
         <button className='submitbutton' type="submit">Save Patient</button>
            </form>
        </div>
      
    </div>
  )
}

export default AddPatient
