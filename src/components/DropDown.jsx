import { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RideContext from '../context/RideContext'
function DropDown() {
  const { rides } = useContext(RideContext)

  const handleState = (e) => {
    console.log(e.target.value)
  }
  const handleCity = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className='drop-down'>
      <p>Filters</p>
      <div className='select'>
        <select name='states' id='' onChange={handleState}>
          {rides.map((item) => (
            <option value={item.state} key={uuidv4()}>
              {item.state}
            </option>
          ))}
        </select>
      </div>
      <div className='select'>
        <select name='city' id='' onChange={handleCity}>
          {rides.map((item) => (
            <option value={item.city} key={uuidv4()}>
              {item.city}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DropDown
