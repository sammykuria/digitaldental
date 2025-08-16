import React from 'react'
import ChartComponent from './ChartComponent'
import StatCard from './StatCard'
import AllStock from './AllStock';
import Patients from './Patient'
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

        <div className='jupitaboss'>
          <div>
            <h3><h2>Dashboard</h2></h3>
          </div>
           <div className='itslife'>
            <i id='life' className="fa-solid fa-magnifying-glass"></i>
            <input
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search inventory'></input>
          </div>
          <div className='truelove'>
            <i class="fa-regular fa-circle-user"></i>
            <div>
              <p>User</p>
            </div>
          </div>

        </div>
        


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


          <div className='tooeasy'>
            <div className='hustle'>
              <Patients />
            </div>
            <div className='motivate'>
              <AllStock />
            </div>
          </div>
    </div>
    </div>

  )
}

export default Home
