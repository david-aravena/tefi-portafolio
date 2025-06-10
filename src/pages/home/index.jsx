import Card from './components/card/'
import Navbar from '../../components/navbar'
import './home.css'

export default function Home({width}){

  return(
    <div style={{ width: width }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h2>Logos animados</h2>
      </div>
      <div>
        <Navbar variant="criollito" />
        <Navbar variant="black" />
        <Navbar variant="white" />
      </div>
    </div>
  )
}