import { query, getDocs, collection } from 'firebase/firestore';

import { db } from '../firebase/config';

const getProducts = async () => {
  const productsQuery = query(collection(db, 'products'));
  const snapshot = await getDocs(productsQuery);

  const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  console.log('Products fetched from Firestore:', products, 'Total products:', products.length);
  return products;
};

export default getProducts;
