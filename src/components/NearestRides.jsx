import { useContext, useState, useEffect } from 'react'
import NearestItem from './NearestItem'
import { v4 as uuidv4 } from 'uuid'
import RideContext from '../context/RideContext'

function NearestRides() {
  const { rides, user } = useContext(RideContext)
  const { station_code } = user

  
  return (
    <div className='nearest-rides'>
      {rides.map((item) => (
        <NearestItem item={item} key={uuidv4()} />
      ))}
    </div>
  )
}

export default NearestRides
