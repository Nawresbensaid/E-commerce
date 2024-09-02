// cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
//open cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};
//cart working js
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
} else{
    ready();
}
//Making Function
function ready(){
    //Remove itemes from cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for (var i=0; i < reomveCartButtons.length; i++){
       var button = reomveCartButtons[i];
       button.addEventListener ("click", removeCartItem);
    }
    //Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i=0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change",quantitychanged);
    }
    // Add to cart
    var addCart = document.getElementsByClassName('add-cart')
    for (var i=0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click",addCartClicked);
    }
}
//Remove itemes from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
// Quantity changes
function quantitychanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}
//Add TO cart
function addCartClicked(event){
    var button = event.target;
    var smartphone = button.parentElement;
    var title = smartphone.getElementsByClassName("product-title").innerText;
    var price = smartphone.getElementsByClassName("price").innerText;
    /*var productImg = smartphone.getElementsByClassName("product-img").src;*/
    console.log(title,price);
    /*updatetotal();*/
}
/*function addProductToCart(title, price,productImg ){
   var cartShopBox = document.createElement("div");
   cartShopBox.classList.add('cart-box')
   var cartItems = document.getElementsByClassName('cart-content')[0];
   var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
   for (var i=0; i < cartItemsNames.length; i++){
    alert("You have already add this item to cart");
    return;
   }

}*/
/*var cartBoxContent = `
                       <img src="${productImg}" alt="" class="cart-img">
                       <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa-solid fa-trash cart-remove"></i>`
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click',removeCartItem);
cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change',quantitychanged);*/

//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i=0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("DT",""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
         //if price contain some centes value 
        //total = Match.round(total *100) / 100;

        document.getElementsByClassName("total-price")[0].innerText = total  + "DT";


    }
}