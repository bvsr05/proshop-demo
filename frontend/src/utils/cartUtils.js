
export const addDecimals = (num) => {   return ( Math.round(num*100)/100 ).toFixed(2);   }


export const updateCart = (state) => {
      // calculate items price
      state.itemsPrice = 
      addDecimals( state.cartItems.reduce( (acc, item) => acc + item.price * item.qty, 0 ) );

      // calculate items shipping price, below $100 is $10 , over it is free
      state.shippingPrice = addDecimals( state.itemsPrice > 100 ? 0 : 10 );

      // calculate items tax price
      state.taxPrice = addDecimals( Number( (0.15 * state.itemsPrice).toFixed(2) ) );

      // calculate items total price
      state.totalPrice = ( Number(state.itemsPrice) + Number(state.shippingPrice) + 
                           Number(state.taxPrice) ).toFixed(2);

      localStorage.setItem( 'cart', JSON.stringify(state) );
      return state;
}