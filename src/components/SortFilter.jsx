import { useState } from 'react'
import Sort from '../assets/sort.svg'
import DropDown from './DropDown'

function SortFilter() {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    if (modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  return (
    <>
      <div className='sort-filter' onClick={openModal}>
        <img src={Sort} alt='' />
        <p>filter</p>
      </div>
      {modal ? <DropDown /> : null}
    </>
  )
}

export default SortFilter
