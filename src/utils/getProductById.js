const getProductById = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
};

export default getProductById;

