import menuIcon from './svg/menu.svg'
import './navbar.css'

export default function Navbar(){
  return(
    <>
      <div className="navbarContainer">
        <div className="animatedLogoContainer">
          <div className="loading">

          </div>
        </div>
        
        <div className="menuContainer">
          <div className="hamburguerContainer"> 
            <img src={menuIcon} alt="" />
          </div>
          <div className="linksContainer">
            <p>About</p>
            <p>Contact</p>
            <p>Home</p>
          </div>
        </div>
      </div>
    </>
  )
}