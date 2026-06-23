import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const Header = (props) => {
  const { totalItems } = useContext(CartContext);
  return (
    <header className='flex justify-between p-4 bg-[#eddb22] shadow-md'>
      <Link to='/'>
        <h1 className='font-bold text-2xl'>{props.title}</h1>
      </Link>
      <nav className='flex gap-8'>
        <Link to={'/products'} className='text-[#9b9165] hover:text-black'>
          Productos
        </Link>
        <Link to={'/cart'} className='text-[#9b9165] hover:text-black'>
          Carrito
          {totalItems > 0 && <span className='ml-2'>({totalItems})</span>}
        </Link>
        <Link to={'/about'} className='text-[#9b9165] hover:text-black'>
          Nosotros
        </Link>
      </nav>
    </header>
  );
};

export default Header;
