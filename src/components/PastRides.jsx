import { useContext } from 'react'
import RideContext from '../context/RideContext'

function PastRides() {
  const { rides } = useContext(RideContext)
  
  return <div>PastRides</div>
}

export default PastRides
