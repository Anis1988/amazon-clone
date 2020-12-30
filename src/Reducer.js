export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload }; //action.payload = user
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] }; // action.payload=object

    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket.filter((item) => {
        return item.id !== action.payload; // action.payload=id
      });
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
export default reducer;
