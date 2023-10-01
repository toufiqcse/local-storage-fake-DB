// @ts-nocheck
//use local storage to manage cart data
const addToDb = (_id) => {
  let shoppingCart;

  // get shopping cart
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  // set qty
  const qty = shoppingCart[_id];
  if (qty) {
    const newQty = qty + 1;
    shoppingCart[_id] = newQty;
  } else {
    shoppingCart[_id] = 1;
  }
  // save to the local storage
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removedDb = (_id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (_id in shoppingCart) {
      delete shoppingCart[_id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
export { addToDb, removedDb };
