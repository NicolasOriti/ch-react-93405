import { useState } from "react"
import ProductCard from "./ProductCard"

//Container
const ProductCardContainer = () => {
  //Lógica, estado, funciones, etc

  //const nombre = 'Horacio'
  const [nombre]  = useState('Franco')

  return (
    <>
      <p>{nombre}</p>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  )
}
export default ProductCardContainer