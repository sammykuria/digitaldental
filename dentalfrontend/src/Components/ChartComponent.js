import React, { useState} from 'react'
import {
  LineChart,Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

 const dataOptions = {
        daily: [
  { name: 'Mon', newPatients: 3, oldPatients: 3 },
  { name: 'Tue', newPatients: 15, oldPatients: 10 },
  { name: 'Wed', newPatients: 20, oldPatients: 33 },
  { name: 'Thur', newPatients: 50, oldPatients: 20 },
  { name: 'Fri', newPatients: 80, oldPatients: 13 },
  { name: 'Sat', newPatients: 50, oldPatients: 60 },
    ],

            monthly: [
  { name: 'Jan', newPatients: 50, oldPatients: 30  },
  { name: 'Feb', newPatients: 65, oldPatients: 60  },
  { name: 'Mar', newPatients: 70, oldPatients: 70  },
  { name: 'Apr', newPatients: 50, oldPatients: 80  },
  { name: 'May', newPatients: 180, oldPatients: 130  },
  { name: 'Jun', newPatients: 90, oldPatients: 50  },
    ],

            yearly: [
  { name: '2021', newPatients: 300, oldPatients: 3000  },
  { name: '2022', newPatients: 405, oldPatients: 800  },
  { name: '2023', newPatients: 600, oldPatients: 1200  },
  { name: '2024', newPatients: 500, oldPatients: 4000  },
  { name: '2025', newPatients: 800, oldPatients: 1300  },
  { name: '2026', newPatients: 700, oldPatients: 8000  },
    ]       
    }

function ChartComponent() {
  
    const[timeRange, setTimeRange] = useState('monthly')
    const data = dataOptions[timeRange]

    const handleChange = (e) => {
        setTimeRange(e.target.value)
    }

  return (
   <div className='chartme' style={{ width: '60%', height: 300 }}>
     

     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <h4>Patients Overview</h4>
        <select onChange={handleChange} value={timeRange} style={{ padding: '5px', borderRadius: '5px' }}>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
     
     
     
     
     <div className='chart-wrapper'>
  <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

           <Area type="monotone"  fill="url(#colorNew)" />
          <Area type="monotone" fill="url(#colorOld)" />
            <Line type="monotone" dataKey="newPatients" stroke="var(--new-line-color)" strokeWidth={2} dot />
          <Line type="monotone" dataKey="oldPatients" stroke="var(--old-line-color)" strokeWidth={2} dot />
        </LineChart>
      </ResponsiveContainer>
     </div>
    


    </div>
  )
}

export default ChartComponent
