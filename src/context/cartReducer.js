export const initialState = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };

    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };

    case 'CLEAR_CART':
      return { ...state, items: [] };

    default:
      return state;
  }
}

// estado actual + accion (Agregar) -> Reducer -> nuevo estado
