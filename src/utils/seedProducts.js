import { collection, addDoc } from 'firebase/firestore';

import { db } from '../firebase/config';

import seedData from './products.json';

const seedProducts = async () => {
  const productsCollection = collection(db, 'products');

  for (const product of seedData) {
    await addDoc(productsCollection, product);
  }

  console.log('Products seeded successfully!', seedData.length);
};

export default seedProducts;
