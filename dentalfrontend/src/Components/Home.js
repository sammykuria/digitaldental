import React from 'react'
import ChartComponent from './ChartComponent'
import StatCard from './StatCard'


const statData = [
 { title: "Today's Summary", label: 'Appointments', value: 200, link: '#' },
  { title: "New Patients", label: 'Patients', value: 85, link: '#' },
  { title: "Old Patients", label: 'Returning', value: 115, link: '#' },
  { title: "Operations", label: 'Operations', value: 12, link: '#' },
];

function Home() {
  return (
    <div>
      <div className='dashboard'>
        <h2>Dashboard</h2>


    <div className='cardfolder'>
        {statData.map((item, i) =>(
          <StatCard
          key={i}
          title={item.title}
          label={item.label}
          value={item.value}
          link={item.link}
           />
        ))}
    </div>

          <div className='secondtabhome'>

                  <div className='homeChart'>
                      <ChartComponent />
                  </div>


          </div>
    </div>
    </div>

  )
}

export default Home
