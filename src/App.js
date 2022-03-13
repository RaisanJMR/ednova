import Navbar from './components/Navbar'
import Tabs from './components/Tabs'
import { RideProvider } from './context/RideContext'


function App() {
  return (
    <RideProvider>
      <Navbar />
      <Tabs />
    </RideProvider>
  )
}

export default App
