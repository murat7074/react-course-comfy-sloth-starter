import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";
import CartItem from "../components/CartItem";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;

    // farklı zamanda aynı ürünü sepete eklemiş olabiliriz ve bunun renginide tespit etmeliyiz
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount; // sepetteki ürünün sayısını artırıcaz
          if (newAmount > cartItem.max) {  // stock dan fazla ürün ekleyemeyiz
            newAmount = cartItem.max;
          }
          return {...cartItem, amount: newAmount}
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };

      //  ürünü ilk defa sepete ekliyorsak
    } else {
      const newItem = {
        id: id + color,  // renk ve id den oluşan yeni bir id oluyor. böylelikle sepetteki farklı renkteki aynı ürünler ayrı ayrı sergileniyor.
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if(action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item)=>item.id !== action.payload)
    return {...state, cart: tempCart}
  }

    if(action.type === CLEAR_CART) {
    
    return {...state, cart: []}
  }

    if(action.type === TOGGLE_CART_ITEM_AMOUNT) {
      const {id,value} =  action.payload
    const tempCart = state.cart.map((item)=>{
      if(item.id === id) { // bu id içinde id + color var
          if(value === "inc") {
              let newAmount = item.amount + 1
              if(newAmount > item.max){
                newAmount = item.max
              }
              return {...item, amount: newAmount}
          }
          if(value === "dec") {
             let newAmount = item.amount - 1
              if(newAmount < 1){
                newAmount = 1
              }
              return {...item, amount: newAmount}
          }
      }
       return item
    })

    return {...state, cart: tempCart}
  }
  if(action.type === COUNT_CART_TOTALS) {

    const {total_items,total_amount} = state.cart.reduce((total,cartItem)=>{

        const {price,amount} = cartItem

        total.total_items += amount // toplam ürün sayısı
        total.total_amount += amount * price  // sepet toplam fiyat
        

      return total
    },{
      // karıştırmayalım diye isimleri aynı verdik
      total_items: 0, // default değer "0"
      total_amount: 0, // default değer "0"
    })

    return {...state, total_items, total_amount}
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
