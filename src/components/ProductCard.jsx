import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CartContext } from '../context/CartProvider';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <article className='rounded-md shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all group'>
          <img src={product.image} alt={product.title} className='h-50 w-full object-cover' />
          <div className='p-4 group-hover:bg-[#fdf9ec]'>
            <h3 className='truncate text-gray-400'>{product.title}</h3>
            <p className='font-bold'>
              {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(
                product.price,
              )}
            </p>
          </div>
        </article>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className='bg-[#fdf9ec] rounded-full p-2 w-full mt-2 hover:bg-[#fce8c3] transition-colors'
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;
