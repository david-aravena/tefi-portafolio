import './menu.css'


export default function MenuVertical() {


  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent:"flex-end", width:"100vw", padding:"0 1rem", gap: "1rem"}}>

      <div className={`emailLogoContainer open`}>
        <a href="mailto:tefi@tefi.cl?subject=Me%20interesa%20su%20servicio%20de%20logotipos&body=Hola" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/024/290/994/small/line-art-mail-button-icon-in-flat-style-vector.jpg"
            alt="email"
            style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: "50px" }}
          />
        </a>
      </div>
      
      <div className={`whatsappLogoContainer open`}>
        <a href="https://wa.me/56990059578?text=Hola%20quiero%20informacion%20sobre%20el%20servicio%20que%20ofrecen" target="_blank" rel="noopener noreferrer">
          <img
            src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"
            alt="WhatsApp"
            style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: "50px" }}
          />
        </a>
      </div>

    </div>
  );
}
