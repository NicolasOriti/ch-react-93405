const ProductCard = ({ product }) => {
  return (
    <article className="rounded-md shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all group">
      <img src={product.image} alt={product.title} className="h-50 w-full object-cover" />
      <div className="p-4 group-hover:bg-[#fdf9ec]">
        <h3 className="truncate text-gray-400">{product.title}</h3>
        <p className="font-bold">{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price)}</p>
      </div>
    </article>
  );
};

export default ProductCard;