import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const RideContext = createContext()

export const RideProvider = ({ children }) => {
  const [user, setUser] = useState({ data: {} })
  const [rides, setRides] = useState([])
  const [stationCode, setStationCode] = useState('')

  useEffect(() => {
    fetchUser()
    fetchRides()
  }, [])

  //   fetch user
  const fetchUser = async () => {
    const { data } = await axios.get('https://assessment.api.vweb.app/user')
    setStationCode(data.station_code)
    setUser(data)
  }

  // fetch rides
  const fetchRides = async () => {
    const { data } = await axios.get('https://assessment.api.vweb.app/rides')
    setRides(data)
  }

  return (
    <RideContext.Provider value={{ user, rides }}>
      {children}
    </RideContext.Provider>
  )
}

export default RideContext
