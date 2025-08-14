import React from 'react'
import { DataGrid} from '@mui/x-data-grid'
import Paper from '@mui/material/Paper';

const incomeColumns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'description', headerName: 'Description', width: 220 },
  { field: 'amount', headerName: 'Amount (KES)', width: 170 },
  { field: 'paymentMethod', headerName: 'Payment Method', width: 170 },
  { field: 'date', headerName: 'Date', width: 170 },
];

const incomeRows = [
  { id: 1, description: 'Patient Payment - Cleaning', amount: 3000, paymentMethod: 'Cash', date: '01/08/2025' },
  { id: 2, description: 'Patient Payment - Filling', amount: 5000, paymentMethod: 'Card', date: '02/08/2025' },
  { id: 3, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
  { id: 4, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
    { id: 5, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
      { id: 6, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
        { id: 7, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
          { id: 8, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
            { id: 9, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
              { id: 10, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
             { id: 11, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
            { id: 12, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
        { id: 13, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
    { id: 14, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },
 { id: 15, description: 'Patient Payment - Braces', amount: 15000, paymentMethod: 'M-Pesa', date: '03/08/2025' },

];


const paginationModel = { pquantity: 0, pquantitySize: 5 };


function AllIncome() {
  return (
    <div>
      
                <div>
       <h2>All Income</h2>
       
       <div className='crg'>
           <Paper sx={{ height: 700, width: '100%' }}>
              <div className="myDataGrid">
                  <DataGrid
                        rows={incomeRows}
                        columns={incomeColumns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                      />
                 </div>
            </Paper>
          </div>
          </div>

    </div>
  )
}

export default AllIncome
