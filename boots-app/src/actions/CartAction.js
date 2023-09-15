export const addToCart = (bootId) => ({
    type : 'ADD_TO_CART',
    payload : bootId,
})

export const removeFromCart = (bootId) => ({
    type : 'REMOVE_FROM_CART',
    payload : bootId,
});


export const increaseQuantity = (bootId) => ({
    type : 'INCREASE_QUANTITY',
    payload : bootId,
});


export const decreaseQuantity = (bootId) => ({
    type : 'DECREASE_QUANTITY',
    payload : bootId,
})