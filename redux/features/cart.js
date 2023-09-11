import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";

const initialState = {
    cartItems:[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartColor: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCart(state) {
            const storedCartItems = localStorage.getItem('cartItems');
            if (storedCartItems) {
                const parsedCartItems = JSON.parse(storedCartItems);
                return {
                    ...state,
                    cartItems: parsedCartItems,
                    cartColor: parsedCartItems.length > 0 ? true : false,
                };
            }
            return state;
        },


        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.productId
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
                toast.info(`Increased ${state.cartItems[existingIndex].productName} cart quantity`, {
                    position: "top-right",
                });
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
                toast.success(`${action.payload.productName} added to cart`, {
                    position: "top-right",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },


        removeCartItem(state, action) {
            const productIdToRemove = action.payload.productId;

            const updatedCartItems = state.cartItems.filter(
                (item) => item.productId !== productIdToRemove
            );

            toast.error(`${action.payload.productName} removed from cart`, {
                position: "top-right",
            });

            const newCartColor = updatedCartItems.length > 0;

            const newState = {
                ...state,
                cartItems: updatedCartItems,
                cartColor: newCartColor,
            };

            localStorage.setItem("cartItems", JSON.stringify(newState.cartItems));
            localStorage.setItem("cartColor", JSON.stringify(newCartColor));

            return newState;
        },

        decreaseCart(state, action) {
            const productId = action.payload.productId;
            const itemIndex = state.cartItems.findIndex(
                (item) => item.productId === productId
            );

            if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info(`${action.payload.productName} is decreased in cart`, {
                    position: "top-right",
                });
            } else if (itemIndex >= 0 && state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.productId !== productId
                );

                state.cartItems = nextCartItems;
                state.cartColor = nextCartItems.length > 0;

                toast.error(`${action.payload.productName} is removed from cart`, {
                    position: "top-right",
                });
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            localStorage.setItem('cartColor', JSON.stringify(state.cartColor));
        },


        increasedCart(state, action) {
            const productId = action.payload.productId;
            const itemIndex = state.cartItems.findIndex(
                (item) => item.productId === productId
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Increased ${action.payload.productName} cart quantity`, {
                    position: 'top-right',
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },


        getTotals(state){
           let{total,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price,cartQuantity}=cartItem
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal
            },{
                total:0,
                quantity:0,
            })
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    },
});

export const { addToCart, initializeCart,removeCartItem, decreaseCart,increasedCart,getTotals } = cartSlice.actions;

export default cartSlice.reducer;

