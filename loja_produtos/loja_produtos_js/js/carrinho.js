//criando verificação para saber se a pagina html carregou
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready()
}

function ready() {
    //funcionalidade do botão de remover
    const removeProductButtons = document.getElementsByClassName("remove-product-button");
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct)
    }

    //função para mudar a quantidade e somar o valor
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", updateTotal)
    }

    //funçao para adicionar os produtos ao carrinho
    const addToCardButtons = document.getElementsByClassName("btn-third")
    for (var i = 0; i < addToCardButtons.length; i++) {
        addToCardButtons[i].addEventListener("click", addProductToCart)
    }
}

//criando função para adicionar ao carrinho
function addProductToCart(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("displayed-img")[0].src
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

    let newCardProduct = document.createElement("tr")
    newCardProduct.classList.add("cart-product")

    newCardProduct.innerHTML =
        `
        <td class="product-identification">
            <img class="cart-product-image" src="${productImage}" alt="${productTitle}">
            <strong class="cart-product-title">${productTitle}</strong>
        </td>
        <td>
            <span class="cart-product-price">${productPrice}</span>
        </td>
        <td>
            <input class="product-qtd-input" type="number" value="1" min="0">
            <button class="remove-product-button" type="button">Remover</button>
        </td>
    `

    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(newCardProduct)
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
};

// função para somar o valor da compra
function updateTotal() {
    let totalCarrinho = 0;
    const cartProduts = document.getElementsByClassName("cart-product");
    for (var i = 0; i < cartProduts.length; i++) {
        //console.log(cartProduts[i])
        const productPrice = cartProduts[i].getElementsByClassName("cart-product-price")[0].innerHTML.replace("R$", "").replace(",", ".");
        const productQuantity = cartProduts[i].getElementsByClassName("product-qtd-input")[0].value;

        totalCarrinho += productPrice * productQuantity;
    }

    totalCarrinho = totalCarrinho.toFixed(2);
    totalCarrinho = totalCarrinho.replace(".", ",");
    document.querySelector(".card-total-container span").innerHTML = "R$" + totalCarrinho;
}