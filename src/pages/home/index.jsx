import { useState } from 'react'
import Card from './components/card/'
import './home.css'

export default function Home(){

  const[products] = useState([
    {
      id: 1,
      title: 'Producto 1',
      description: 'Descripción del producto 1',
      image: 'https://via.placeholder.com/150'
    }, 
    {
      id: 2,
      title: 'Producto 2',
      description: 'Descripción del producto 2',
      image: 'https://via.placeholder.com/150'
    }, 
    {
      id: 3,
      title: 'Producto 3',
      description: 'Descripción del producto 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'Producto 4',
      description: 'Descripción del producto 3',
      image: 'https://via.placeholder.com/150'
    }
  ])

  return(
    <div className="containerHome">
      {products.map((product, index) => (
        <Card product={product} index={index} />
      ))}
    </div>
  )
}