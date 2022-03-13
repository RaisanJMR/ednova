import { useContext } from 'react'
import NearestItem from './NearestItem'
import { v4 as uuidv4 } from 'uuid'
import RideContext from '../context/RideContext'

function NearestRides() {
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

  return (
    <div className='nearest-rides'>
      {valueTwo.map((item) => (
        <NearestItem item={item} key={uuidv4()} />
      ))}
    </div>
  )
}

export default NearestRides
