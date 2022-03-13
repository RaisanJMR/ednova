import { useState } from 'react'
import NearestRides from './NearestRides'
import PastRides from './PastRides'
import UpcomingRides from './UpcomingRides'
import SortFilter from './SortFilter'

function Tabs() {
  const [toggleState, setToggleState] = useState(1)

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
            Upcoming rides(4)
          </li>
          <li
            className={toggleState === 3 ? 'tabs tabs-active' : 'tabs'}
            onClick={() => toggleTab(3)}>
            Past rides(2)
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
