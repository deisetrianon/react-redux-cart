import { ACTIONS_TYPES } from '../actions';
import cartItems from '../cart-items';

const initialStore = {
  amount: 0,
  cart: cartItems,
  total: 0
};

const reducer = (state = initialStore, action) => {
    const { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } = ACTIONS_TYPES;

    switch(action.type) {
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }

        case REMOVE:
            return {
                ...state,
                cart: state.cart.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }

        case GET_TOTALS:
            let {total, amount} = state.cart.reduce((cardTotal, cardItem) => {
                const { price, amount } = cardItem;
                const itemTotal = price * amount;
                cardTotal.amount += amount;
                cardTotal.total += itemTotal;

                return cardTotal;
            },{
                total: 0,
                amount: 0
            });

            total = parseFloat(total.toFixed(2));

            return {
                ...state,
                total,
                amount
            }

        case TOGGLE_AMOUNT:
            return {
                ...state,
                cart: state.cart.map(cartItem => {
                    if (cartItem.id === action.payload.id) {
                        switch(action.payload.toggle) {
                            case 'inc':
                                return cartItem = {...cartItem, amount: ++cartItem.amount}
                            case 'dec':
                                return cartItem = {...cartItem, amount: --cartItem.amount}
                            default:
                                return cartItem
                        }
                    }
                    return cartItem
                })
            }

        default:
            return state
    }
};

export default reducer;