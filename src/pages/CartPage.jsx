import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';

const CartPage = () => {
  const { items, total, removeFromCart, clearCart } = useContext(CartContext);

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item, quantity: 0 };
    }
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const cartItems = Object.values(groupedItems);

  if (items.length === 0) {
    return (
      <section className='mx-auto flex min-h-[60vh] w-full max-w-5xl items-center justify-center px-4 py-14 sm:px-6 lg:px-8'>
        <div className='w-full max-w-xl rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-lime-50 to-amber-50 p-8 text-center shadow-lg shadow-emerald-100/60'>
          <p className='text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600'>Carrito</p>
          <h1 className='mt-3 text-3xl font-black tracking-tight text-emerald-950 sm:text-4xl'>Tu carrito esta vacio</h1>
          <p className='mt-4 text-base text-emerald-800/80'>Agrega productos para verlos aca con el detalle de cantidades y total.</p>
        </div>
      </section>
    );
  }

  return (
    <section className='mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8'>
      <header className='mb-8 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-lime-700 p-6 text-white shadow-lg'>
        <p className='text-xs font-semibold uppercase tracking-[0.18em] text-lime-200'>Resumen</p>
        <h1 className='mt-2 text-3xl font-black tracking-tight sm:text-4xl'>Tu carrito</h1>
        <p className='mt-2 text-sm text-emerald-100 sm:text-base'>
          {cartItems.length} producto{cartItems.length !== 1 ? 's' : ''} distinto{cartItems.length !== 1 ? 's' : ''} · {items.length} item
          {items.length !== 1 ? 's' : ''}
        </p>
      </header>

      <div className='grid gap-6 lg:grid-cols-[1fr_320px]'>
        <ul className='space-y-4'>
          {cartItems.map((item) => {
            const subtotal = item.price * item.quantity;

            return (
              <li
                key={item.id}
                className='group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md'
              >
                <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                  <div>
                    <h2 className='text-lg font-bold text-slate-900'>{item.title}</h2>
                    <p className='mt-1 text-sm text-slate-500'>Precio unitario: ${item.price.toFixed(2)}</p>
                  </div>

                  <div className='flex items-center gap-3 sm:justify-end'>
                    <span className='inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-800'>
                      Cantidad: {item.quantity}
                    </span>
                    <button
                      className='rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100 hover:text-rose-800'
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <div className='mt-4 border-t border-slate-100 pt-4 text-right'>
                  <p className='text-sm text-slate-500'>Subtotal</p>
                  <p className='text-xl font-extrabold text-slate-900'>${subtotal.toFixed(2)}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className='h-fit rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 shadow-sm lg:sticky lg:top-6'>
          <h3 className='text-sm font-bold uppercase tracking-[0.16em] text-emerald-700'>Total del pedido</h3>
          <p className='mt-2 text-4xl font-black tracking-tight text-emerald-950'>${total.toFixed(2)}</p>
          <p className='mt-2 text-sm text-emerald-800/80'>Impuestos y envio se calculan al finalizar la compra.</p>

          <button
            className='mt-6 w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 active:scale-[0.99]'
            type='button'
          >
            Finalizar compra
          </button>

          <button
            className='mt-3 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
            onClick={clearCart}
            type='button'
          >
            Vaciar carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
