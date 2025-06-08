import './home.css'

export default function Home(){
  return(
    <div style={{
      width:"100vw", 
      position:"absolute", 
      top:"50%", 
      transform: "translateY(-50%)",
      display:"flex",
      justifyContent:"space-around"
    }}>
      <div className="containerLogos">
        <img src="/images/imagenLogosAnimados.png" alt="Imagen Logos Animados" style={{height:"100%"}} />
        <h2>Logos animados</h2>
      </div>

      <div className="containerComponents">
        <img src="/images/imagenComponentes.png" alt="Imagen Logos Animados" style={{height:"100%"}} />
        <h2>Componentes web</h2>
      </div>
    </div>
  )
}