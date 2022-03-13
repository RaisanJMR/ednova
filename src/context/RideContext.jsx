import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const RideContext = createContext()

export const RideProvider = ({ children }) => {
  const [user, setUser] = useState({ data: {} })
  const [rides, setRides] = useState([])
 

  useEffect(() => {
    fetchUser()
    fetchRides()
  }, [])

  //   fetch user
  const fetchUser = async () => {
    const { data } = await axios.get(process.env.REACT_APP_USER_URL)
    setUser(data)
  }

  // fetch rides
  const fetchRides = async () => {
    const { data } = await axios.get(process.env.REACT_APP_RIDES_URL)
    setRides(data)
  }

  return (
    <RideContext.Provider value={{ user, rides }}>
      {children}
    </RideContext.Provider>
  )
}

export default RideContext
