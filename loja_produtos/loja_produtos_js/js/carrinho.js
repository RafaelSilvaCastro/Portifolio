const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (var i = 0; i < removeProductButtons.length; i++){
    removeProductButtons[i].addEventListener("click", function(event){
     event.target.parentElement.parentElement.remove();
    });
}


const cartProduts = document.getElementsByClassName("cart-product");
for(var i = 0; i < cartProduts.length; i++){
    //console.log(cartProduts[i])
    const productPrice = cartProduts[i].getElementsByClassName("cart-product-price")[0].innerHTML;
    const productQuantity = cartProduts[i].getElementsByClassName("product-qtd-input")[0].value;

}