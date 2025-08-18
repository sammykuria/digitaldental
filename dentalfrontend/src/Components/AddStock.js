import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
const API_BASE = "https://digitaldental.onrender.com";


function AddStock() {

  const navigate = useNavigate()

    const [stockData,setStockData] = useState({

        itemname:'',
        category:'',
        quantity:'',
        price:'',
        date:''
    })

      const handleChange = (e) => {
    setStockData({...stockData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
  e.preventDefault()
  fetch("https://digitaldental.onrender.com/stocks", {
    method:'POST',
    body: JSON.stringify({ stock: stockData}),
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
     alert('Accounts added successfully.');
navigate('/allexpenses') 
  })
  .catch(error =>{
    console.error('There was a problem with fecth', error)
  })
}








    return(
   <div>
          <div className='patientt'>
        <div className='yees'>
            <div className='yee'>
         <h2>Add  New Stock</h2>

            </div>
          
        </div>
     
          

        <div className='formcontainer'>
            <form onSubmit={handleSubmit}>

               <div  className='form-row' >
                <div className='fullname'>
                <label htmlFor="fullName" >
                    Item Name
                </label>
                <input type="text" id="phone" placeholder="Enter  name"
                 name='itemname'
                value={stockData.itemname}
                onChange={handleChange}
                />
                
                </div>
{/* 
                 <div className='fullname'>
                <label htmlFor="category" >
                   Category
                </label>
                <input type="number" id="phone" placeholder="Enter stock category"/>
                
                </div> */}

                 <div className='fullname'>
                  <label htmlFor="phone">Category</label>
                     <select required
                     name='category'
                     value={stockData.category}
                     onChange={handleChange}
                     >
                    <option value="">Select Category</option>
                    <option value="Supplies">Supplies</option>
                    <option value="Materials">Materials</option>
                    <option value="Equipements">Equipements</option>
                    </select>
                </div>
               

                  <div className='fullname'>
                <label htmlFor="phone">Quantity</label>
                <input type="text" id="phone" placeholder="Quantity"
                 name='quantity'
                value={stockData.quantity}
                onChange={handleChange}
                />
                </div>

                   <div className='fullname'>
                <label htmlFor="phone">Price</label>
                <input type="text" id="phone" placeholder="price"
                  name='price'
               value={stockData.price}
                onChange={handleChange}
                />
                </div>
                
                </div>

             
                <div className='fullname'>
                <label htmlFor="phone">Date</label>
                <input type="date" id="phone" placeholder="01/08/2025"
                name='date'
               value={stockData.date}
                onChange={handleChange}
                />
                </div>
                

               
                
         <button className='submitbutton' type="submit">Add Stock</button>
            </form>
        </div>
      
    </div>
    </div>
    )
 
  
}


export default AddStock
