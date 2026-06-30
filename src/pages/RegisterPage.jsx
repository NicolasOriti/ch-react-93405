import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthProvider';

const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      await register(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message || 'Error al crear la cuenta');
    }
  };

  return (
    <main className='p-4 max-w-sm mx-auto'>
      <h2 className='font-bold text-2xl mb-4'>Crear cuenta</h2>

      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <input
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          className='border border-gray-300 rounded-md px-2 py-1'
        />
        <input
          type='password'
          placeholder='Contraseña (mínimo 6 caracteres)'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          minLength={6}
          className='border border-gray-300 rounded-md px-2 py-1'
        />

        {error && <p className='text-red-600 text-sm'>{error}</p>}

        <button type='submit' className='bg-[#eddb26] text-[#000] px-4 py-1 rounded-md'>
          Registrarme
        </button>
      </form>

      <p className='text-sm text-gray-500 mt-3'>
        ¿Ya tenés cuenta?{' '}
        <Link to='/login' className='underline'>
          Iniciá sesión
        </Link>
      </p>
    </main>
  );
};

export default RegisterPage;
