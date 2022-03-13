import { useContext } from 'react'
import RideContext from '../context/RideContext'

function PastRides() {
  const { rides } = useContext(RideContext)

  return <div>{rides}</div>
}

export default PastRides
