import { useEffect, useState, useRef } from 'react';
import ProductCard from './ProductCard';
import getProducts from '../utils/getProducts';

// Ciclo de vida:
// Montaje: levanta el componente. Lo pone en el DOM
// Actualizacion: --> Cada vez que cambia algo en el componente.
// Desmontaje: --> cuando se elimina / destruye el componente.

//Container
const ProductCardContainer = () => {
  //Lógica, estado, funciones, etc

  //const nombre = 'Horacio'
  // const [nombre] = useState('Franco');

  // Desestructuración --> destructuring
  // []
  // {}
  // const estado = [[], () => {}];
  // const [product, setProduct] = [[], () => {}];

  // useState
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useRef
  const inputRef = useRef(null);

  // -> Para que sirven los states? Sirven para re-renderizar cuando el estado cambia

  // console.log('Este es el state products:', products);

  /* 
  Array -> ¿Cuándo se ejecuta?
    (sin array)	En cada render — ⚠️ peligroso, casi nunca lo querés
    []	Una sola vez, al montar — ideal para fetch inicial
    [products]	Cuando cambia alguna dependencia — ideal para "recargar al cambiar el products"
  */

  useEffect(() => {
    // Ciclo de vida del componente
    // Montaje -> cuando el componente se construye en el dom
    // Se ejecuta la funcion del useEffect

    // const productsArray = await getProducts(); -->No se puede poner async/ await en useEffect
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

    console.log('Hola Montaje completado!');
    console.log('[USEEFFECT] inputRef: ', inputRef);
    // Actualizacion -> Se vuelve a ejecutar cada vez que se re-renderice el componente (solo y solo si, tiene un estado que cambio en las dependencias)

    // desmontaje
    return () => {
      console.log('Componente Destruido');
    };
  }, []);

  // console.log('Este es el state products:', products);
  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <>
      <p>Listado de productos</p>
      <input ref={inputRef} type='text' placeholder='Buscador' />
      <button
        onClick={() => {
          console.log('inputRef: ', inputRef.current.value);
        }}
      ></button>

      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}

      {/* <ProductCard product={products[0]} />
      <ProductCard product={products[1]} />
      <ProductCard product={products[2]} />
      <ProductCard product={products[3]} />
      <ProductCard product={products[4]} /> */}
    </>
  );
};

export default ProductCardContainer;
