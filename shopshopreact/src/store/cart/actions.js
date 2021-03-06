export function cartActions(dispatch){

  return {
    increment: (event) => dispatch({ type: "INCREASE_QUANTITY", index: event.target.value }),
    decrement: (event) => dispatch({ type: "DECREASE_QUANTITY", index: event.target.value }),
    remove: (event) => dispatch({ type: "REMOVE_PRODUCT", index: event.target.value }),
    calculateAmount: (event) => dispatch({ type: "CALCULATE_AMOUNT" }),
    validateAddress: (event) => dispatch({ type: "VALIDATE_ADDRESS" }),
    resetCart: () => dispatch({type:"RESET_CART"})
  }
}
