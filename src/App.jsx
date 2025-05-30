import Navbar from './components/navbar/'
import Menu from './components/menu/'
import './App.css'

function App() {

  return (
    <>
      <div style={{position:"absolute", bottom:24, right:8}}>
        <Menu />
      </div>
      <Navbar />
    </>
  )
}

export default App
