import { useContext } from 'react'
import RideContext from '../context/RideContext'

function Navbar() {
  
  const { user } = useContext(RideContext)

  return (
    <div className='navbar'>
      <div className='container'>
        <h1>edvora</h1>
        <div className='user'>
          <h3>{user.name}</h3>
          <img src={user.url} alt={user.name} width='44px' height='44px' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
