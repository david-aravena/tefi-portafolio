import './card.css'

export default function Card({ product, index }) {
  return(
    <div key={index} className="card">
      <div className="containerCardImage">
        <img src={product.image} alt="error" style={{width:"70%"}} />
      </div>
      <div className="containerCardTitle">
        <h2 className="card-title">{product.title}</h2>
      </div>
      <div className="containerCardDescription">
        <p className="card-description">{product.description}</p>
      </div>
    </div>
  )
}