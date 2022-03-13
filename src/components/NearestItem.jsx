import React from 'react'

function NearestItem({ item }) {
  return (
   
      <div className='nearest-ride'>
        <div className='ride-map'>
          <img src={item.map_url} alt={item.map_url} />
        </div>
        <div className='ride-details'>
          <p>Ride id: {item.id}</p>
          <p>Orgin station: {item.origin_station_code}</p>
          <p>Station path: [{item.station_path.toString()}]</p>
          <p>Date: {item.date}</p>
          <p>Distance: 0</p>
        </div>
        <div className='state-city'>
            <small className="state">{item.state}</small>
            <small className="city">{item.city}</small>
        </div>
      </div>
   
  )
}

export default NearestItem
