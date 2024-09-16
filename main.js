// cart open close
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// open cart
cartIcon.onclick = () => {
  cart.classList.add('active');
};
// close cart
closeCart.onclick = () => {
    cart.classList.remove('active');
  };
  
   // making add to cart
   if (document.readyState == 'loading') {
       document.addEventListener('DOMContentLoaded', ready);
   } else {
     ready();
   }
  
   function ready() {
     var removeCartButtons = document.getElementsByClassName('cart-remove');
     for ( var i = 0; i< removeCartButtons.length; i++) {
       var button = removeCartButtons[i];
       button.addEventListener("click", removeCartItem );
     }
 }
 
 const cartItems = 
 [`<div class="product-box">
               <img src="/Images/4.jpeg" alt="" class="product-img">
               <h2 class="product-title">
                 mini solar
               </h2>
               <span class="price">NGN 45,000</span>
               <i class="bx bx-shipping-bag add-cart">🧺</i>
       </div>`];
  for (let i = 0; i < cartItems.length; i++) {
    
    let cartItemsHTML = '';
    const items = cartItems[i];
    const html = '<p>${cartItems}</p>';
    cartItemsHTML += html;
    console.log(cartItemsHTML);
  }
