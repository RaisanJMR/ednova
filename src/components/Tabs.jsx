import { useState } from 'react'
import NearestRides from './NearestRides'
import PastRides from './PastRides'
import UpcomingRides from './UpcomingRides'
import SortFilter from './SortFilter'
import { useContext } from 'react'
import RideContext from '../context/RideContext'

function Tabs() {
  const [toggleState, setToggleState] = useState(1)
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
  const futureRides = valueTwo.filter((item) => {
    const currDate = new Date()
    const fromData = new Date(item.date)
    return currDate<= fromData
  })
  const pastRides = valueTwo.filter((item) => {
    const currDate = new Date()
    const fromData = new Date(item.date)
    return currDate >= fromData
  })
  const toggleTab = (value) => {
    setToggleState(value)
  }

  return (
    <>
      <div className='tabs-container'>
        <div className='container'>
          <li
            className={toggleState === 1 ? 'tabs tabs-active' : 'tabs'}
            onClick={() => toggleTab(1)}>
            Nearest rides
          </li>
          <li
            className={toggleState === 2 ? 'tabs tabs-active' : 'tabs'}
            onClick={() => toggleTab(2)}>
            Upcoming rides({futureRides.length})
          </li>
          <li
            className={toggleState === 3 ? 'tabs tabs-active' : 'tabs'}
            onClick={() => toggleTab(3)}>
            Past rides({pastRides.length})
          </li>
          <SortFilter />
        </div>
      </div>
      <div className='tabs-content'>
        {toggleState === 1 && <NearestRides />}
        {toggleState === 2 && <UpcomingRides />}
        {toggleState === 3 && <PastRides />}
      </div>
    </>
  )
}

export default Tabs
