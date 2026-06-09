import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import ProductCard from '../components/ProductCard';

import getProductById from '../utils/getProductById';

const DetailProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then((data) => setProduct(data));
  }, []);

  return (
    <>
      <ProductCard product={product} />
    </>
  );
};

export default DetailProductPage;
