import menuIconWhite from './svg/menuWhite.svg'
import menuIconBlack from './svg/menuBlack.svg'
import './navbar.css'

export default function Navbar(){
  return(
    <>
      <div className="navbarContainerBlack">
        <div className="animatedLogoContainerTc">
          <div className="loadingTc">

          </div>
        </div>
        
        <div className="menuContainer">
          <div className="hamburguerContainer"> 
            <img src={menuIconWhite} alt="" />
          </div>
          <div className="linksContainer">
            <p style={{color:"white"}}>About</p>
            <p style={{color:"white"}}>Contact</p>
            <p style={{color:"white"}}>Home</p>
          </div>
        </div>
      </div>

      <div className="navbarContainerWhite">
        <div className="animatedLogoContainerDevsafio">
          <div className="loadingDevsafio">

          </div>
        </div>
        
        <div className="menuContainer">
          <div className="hamburguerContainer"> 
            <img src={menuIconBlack} alt="" />
          </div>
          <div className="linksContainer">
            <p style={{color:"black"}}>About</p>
            <p style={{color:"black"}}>Contact</p>
            <p style={{color:"black"}}>Home</p>
          </div>
        </div>
      </div>
    </>
  )
}