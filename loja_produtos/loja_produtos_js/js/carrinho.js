//criando verificação para saber se a pagina html carregou
if(document.readyState == "loading"){
    document,addEventListener("DOMContentLoaded", ready)
}else{
    ready()
}

function ready(){
//funcionalidade do botão de remover
const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (var i = 0; i < removeProductButtons.length; i++){
    removeProductButtons[i].addEventListener("click", removeProduct)
  }

  const quantityInputs = document.getElementsByClassName("product-qtd-input")
  for(var i = 0; quantityInputs; i++){
    quantityInputs[i].addEventListener("change", updateTotal)
  }

  const addToCardButtons = document.getElementsByClassName("btn btn-third")
  for(var i = 0; i < addToCardButtons.length; i++){
    addToCardButtons[i].addEventListener("click", addToCardButtons)
  }
}

function addProductToCart(event){
    const button = event.target
    
    console.log(button)

}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
     updateTotal();
  };

// função para somar o valor da compra
function updateTotal(){
let totalCarrinho = 0;
const cartProduts = document.getElementsByClassName("cart-product");
for(var i = 0; i < cartProduts.length; i++){
    //console.log(cartProduts[i])
    const productPrice = cartProduts[i].getElementsByClassName("cart-product-price")[0].innerHTML.replace("R$", "").replace(",", ".");
    const productQuantity = cartProduts[i].getElementsByClassName("product-qtd-input")[0].value;

    totalCarrinho += productPrice * productQuantity;
}

totalCarrinho = totalCarrinho.toFixed(2);
totalCarrinho = totalCarrinho.replace(".", ",");
document.querySelector(".card-total-container span").innerHTML =  "R$" + totalCarrinho;
}