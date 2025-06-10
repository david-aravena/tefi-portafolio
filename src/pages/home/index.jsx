import { useState } from 'react'
import CardComponent from './components/card'
import Navbar from '../../components/navbar'
import ButtonSpinner from './components/button'
import './home.css'

export default function Home({width}){

  const [components] = useState([
    {
      element: ButtonSpinner, 
      name:"Boton Spinner"
    }
  ])

  const [selectedComponent, setSelectedComponent] = useState(null);

  return(
    <>
      <div style={{ width: width }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <h2>Logos animados</h2>
        </div>
        <div>
          <Navbar variant="criollito" />
          <Navbar variant="black" />
          <Navbar variant="white" />
        </div>
        <div className="containerCards">
          {components.map((component, index) => (
            <CardComponent component={component} index={index} onclick={(component) => setSelectedComponent(component.name)} />
          ))}
        </div>
      </div>


      {selectedComponent && (
        <div style={{
          position:"absolute", 
          top:0, 
          left:0, 
          width:"100%", 
          height:"100%", 
          display:"flex", 
          justifyContent:"center", 
          alignItems:"center",
          background: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(10px)",       
          WebkitBackdropFilter: "blur(10px)"
        }}>
          <div style={{position:"absolute", top:0, right:0}}>
            <button onClick={() => setSelectedComponent(null)}>CERRAR</button>
          </div>
          {selectedComponent === "Boton Spinner" && (
            <ButtonSpinner />
          )}
        </div>
      )}
    </>
  )
}