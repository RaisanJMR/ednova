import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RideContext from '../context/RideContext'
import NearestItem from './NearestItem'

function PastRides() {
  const { rides, user } = useContext(RideContext)
  const valueFirst = rides.filter((id) => {
    return true === id.station_path.includes(user.station_code)
  })
  const valueTwo = valueFirst.sort((a, b) => {
    return (
      a.station_path.indexOf(user.station_code) -
      b.station_path.indexOf(user.station_code)
    )
  })
  const pastRides = valueTwo.filter((item) => {
    const currDate = new Date()
    const fromData = new Date(item.date)
    return currDate >= fromData
  })

  return (
    <div className='nearest-rides'>
      {pastRides.map((item) => (
        <NearestItem item={item} key={uuidv4()} />
      ))}
    </div>
  )
}

export default PastRides
