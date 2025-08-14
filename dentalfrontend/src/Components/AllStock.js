import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
// const paginationModel = { pquantity: 0, pquantitySize: 10 };
function AllStock() {

  const[stocks,setStocks] = useState([])
  const[searchTerm, setSearchTerm] =useState('')

  useEffect(() => {
fetch('http://127.0.0.1:4000/stocks')
  .then(res => res.json())
  .then(data => {
    if (Array.isArray(data)) {
      const formattedData = data.map(stock => ({
        ...stock,
        date: stock.created_at
          ? new Date(stock.created_at).toISOString().slice(0, 10)
          : ""
      }));
      setStocks(formattedData);
    } else if (Array.isArray(data.stocks)) {
      setStocks(data.stocks);
    } else {
      console.error("Unexpected data format:", data);
    }
  })
  .catch(e => console.log('error fetching stocks:', e));

    },[])


    //search term
    // const filteredStock = stocks.filter(stock => 
    //   stock.itemname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //    stock.category.toLowerCase().includes(searchTerm.toLowerCase())
    // )

    const filteredStock = stocks.filter(stock =>
  (stock.itemname || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
  (stock.category || "").toLowerCase().includes(searchTerm.toLowerCase())
);





  return (
    <div>
      <div className='topper'>


      <div className='headerinput'>
         <h2 className='liveheader'>📦 Live Stock report</h2>
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

      <table className="styled-table" border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
         
          </tr>
        </thead>
        <tbody>
          {filteredStock.map(stock => (
            <tr key={stock.id}>
              <td>{stock.itemname}</td>
              <td className='guitar'>{stock.category}</td>
              <td>{stock.quantity}</td>
              <td>{stock.price}</td>
              <td>{stock.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default AllStock



