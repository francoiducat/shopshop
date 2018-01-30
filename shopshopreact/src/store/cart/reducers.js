const initialState={
  productsCarted: [{decathlon_id: 2345, title: "testproduct", min_price:3, image_path:"https://www.decathlon.fr/media/835/8350534/zoom_2ec07fad67464648a94a5f2c6be18319.jpg"}],
}

export default function cart(state = initialState, action){
  switch(action.type){
    case "ADD_PRODUCT":
    let newArrayAddProduct = state.productsCarted.slice();
    newArrayAddProduct.splice(newArrayAddProduct.length, 0 , action.products);
    return{
      ...state,
      productsCarted: newArrayAddProduct
    }
    case "REMOVE_PRODUCT":
    const indexRemoved = state.productsCarted.indexOf(action.products);
    let newArrayRemoveProduct = state.productsCarted.slice();
    newArrayRemoveProduct.splice(indexRemoved, 1)
    return{
      ...state,
      productsCarted: newArrayRemoveProduct
    }
    case "ADD_QUANTITY":
    const indexAdd = state.productsCarted.indexOf(action.products);
    let newArrayAddQuantity = state.productsCarted.slice();
    newArrayAddQuantity[indexAdd].quantity += 1
    return{
      ...state,
      productsCarted: newArrayAddQuantity
    }
    case "REMOVE_QUANTITY":
    const indexRemove = state.productsCarted.indexOf(action.products);
    let newArrayRemoveQuantity = state.productsCarted.slice();
    newArrayRemoveQuantity[indexRemove].quantity -= 1
    return{
      ...state,
      productsCarted: newArrayRemoveQuantity
    }
    default:
    console.log(state.productsCarted)
    return state;
  }
}
