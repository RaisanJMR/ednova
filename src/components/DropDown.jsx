import { useState } from 'react'

function DropDown({ data }) {
  console.log('from drop down', data)
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
          <option value='kerala'>Kerala</option>
          <option value='karnataka'>Karnataka</option>
          <option value='Tamil nadu'>Tamil Nadu</option>
        </select>
      </div>
      <div className='select'>
        <select name='city' id='' onChange={handleCity}>
          <option value='abc'>abc</option>
          <option value='city2'>City2</option>
          <option value='city3'>City3</option>
        </select>
      </div>
    </div>
  )
}

export default DropDown
