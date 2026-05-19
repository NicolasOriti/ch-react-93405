//Presentacional : se encarga del JSX (div,texto)
const ProductCard = ({ product }) => {
  // console.log('Este es el product', product);
  return (
    <article>
      <img src={product.img} alt='' />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
    </article>
  );
};
export default ProductCard;
