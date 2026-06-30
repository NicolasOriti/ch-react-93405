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

