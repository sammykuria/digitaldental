import React from 'react'

function StatCard({title, label, value, link}) {
  return (
    <div>
      
         <div className='cardcontainer' >
            <div className='card'>
            <div className='cardbody'>
           <h5 className='cardtitle'> {title} </h5>
            </div>
             <div className='statscont'>
                <p className='cardtext'>{label}</p>
                <p>{value}</p>
             </div>
              <a className='cardlink' href={link}>Show more</a>
            </div>
            </div>
    </div>
  )
}

export default StatCard
