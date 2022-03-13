import { useContext } from 'react'
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
            <option value={item.state}>{item.state}</option>
          ))}
        </select>
      </div>
      <div className='select'>
        <select name='city' id='' onChange={handleCity}>
          {rides.map((item) => (
            <option value={item.city}>{item.city}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DropDown
