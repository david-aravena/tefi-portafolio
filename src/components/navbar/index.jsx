import Hamburger from '../buttonMenu'
import './navbar.css'

export default function Navbar(){
  return(
    <div style={{fontFamily: 'montserrat'}}>
      <div className="navbarContainerBlack">
        <div className="animatedLogoContainerTc">
          <div className="loadingTc">

          </div>
        </div>
        
        <div className="menuContainer">
          <div className="hamburguerContainer"> 
            <Hamburger color="white" />
          </div>
          <div className="linksContainer">
            <p style={{color:"white"}}>About</p>
            <p style={{color:"white"}}>Contact</p>
            <p style={{color:"white"}}>Home</p>
          </div>
        </div>
      </div>

      <div className="navbarContainerCriollito">
        <div className="animatedLogoContainerCriollito">
          <div className="loadingCriollito">

          </div>
        </div>
        
        <div className="menuContainerWhite">
          <div className="hamburguerContainer"> 
            <Hamburger color="#cc0000" />
          </div>
          <div className="linksContainer">
            <p style={{color:"red"}}>About</p>
            <p style={{color:"red"}}>Contact</p>
            <p style={{color:"red"}}>Home</p>
          </div>
        </div>
      </div>

      <div className="navbarContainerWhite">
        <div className="animatedLogoContainerDevsafio">
          <div className="loadingDevsafio">

          </div>
        </div>
        
        <div className="menuContainerWhite">
          <div className="hamburguerContainer"> 
            <Hamburger color="blue" />
          </div>
          <div className="linksContainer">
            <p style={{color:"black"}}>About</p>
            <p style={{color:"black"}}>Contact</p>
            <p style={{color:"black"}}>Home</p>
          </div>
        </div>
      </div>
    </div>
  )
}