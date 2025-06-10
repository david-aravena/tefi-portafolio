import { Link, useLocation } from 'react-router';
import './header.css'


export default function Header({padding}) {

  const location = useLocation();
  const isRoot = location.pathname === "/";
  const targetRoute = isRoot ? "/nosotros" : "/";


  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"space-between", alignItems:"center", width:"100vw", padding: padding, gap: "1rem", backgroundColor:"white"}}>

      <div>
        <div style={{width:"150px", height:"auto"}}>
          <Link to={targetRoute}>
            <img
              src="/icons/LogoTefi.png"
              alt="Logo tefi"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Link>
        </div>
      </div>

      <div>
        <h2>Nosotros</h2>
      </div>

    </div>
  );
}
