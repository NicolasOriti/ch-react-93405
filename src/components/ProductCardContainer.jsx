import { useEffect, useRef, useState } from 'react';

import getProducts from '../utils/getProducts';
import ProductCard from './ProductCard';

const ProductCardContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al cargar productos: ', error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      console.log('Componente Destruido');
    };
  }, []);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <>
      <div className='flex justify-between mb-4'>
        <p className="text-gray-500">Listado de productos</p>
        <div className="flex gap-2">
          <input ref={inputRef} type='text' placeholder='Buscador' className="border border-gray-300 rounded-md px-1" />
          <button
            className="bg-[#1b3d2f] text-[#fdf9ec] px-2 py-0.5 rounded-md"
            onClick={() => {
              console.log('inputRef: ', inputRef.current.value);
            }}
          >buscar</button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))]">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductCardContainer;
