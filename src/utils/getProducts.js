// Simulamos funcionamiento de peticion a una base de datos o API
const products = [
  {
    id: '1',
    name: 'Auriculares Inalámbricos',
    price: 25000,
    category: 'electronica',
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    stock: 12,
    description: 'Auriculares Bluetooth con cancelación de ruido.',
  },
  {
    id: '2',
    name: 'Reloj Smartwatch',
    price: 48000,
    category: 'electronica',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
    stock: 5,
    description: 'Smartwatch resistente al agua, monitor cardíaco.',
  },
  {
    id: '3',
    name: 'Mochila Urbana',
    price: 18000,
    category: 'indumentaria',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    stock: 20,
    description: 'Mochila impermeable con compartimento para notebook.',
  },
  {
    id: '4',
    name: 'Termo de Acero',
    price: 9500,
    category: 'hogar',
    img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
    stock: 1,
    description: 'Termo de acero inoxidable 1L, mantiene calor 12hs.',
  },
  {
    id: '5',
    name: 'Zapatillas Running',
    price: 65000,
    category: 'indumentaria',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 8,
    description: 'Zapatillas con amortiguación para correr.',
  },
];

const getProducts = () => {

  /* 
  
  fetch() : fetch realiza una solicitud (request) a traves del protocolo HTTP (Request - Response)

  Request : 
    METODO/VERBO (GET-POST-PUT-PATCH-DELETE) URL/IP  VERSION
    Headers
    Body

  Response : 
    VERSION CODIGO TEXTO
    Headers
    Body (datos que nos devuelve la API)

   */

  //APIs REST 
  //fetch("https://jsonplaceholder.typicode.com/posts")
  return fetch('https://fakestoreapi.com/products')
    .then(response => response.json())

  /* return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  }); */
};

export default getProducts;

