//criando verificação para saber se a página HTML carregou
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

    //função para adicionar os produtos ao carrinho
    const addToCartButtons = document.querySelectorAll(".produto");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addProductToCart);
    });
}

// Adiciona o manipulador de evento de clique aos botões "ADICIONAR AO CARRINHO"
const addToCartButtons = document.querySelectorAll(".especialidades .btn");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Encontrar o elemento pai do botão (div .produtos-box)
        const productBox = button.closest(".produtos-box");

        // Extrair os detalhes do produto
        const productTitle = productBox.querySelector(".product-title").innerText;
        const productPrice = productBox.querySelector(".product-price").innerText;

        // Adicionar o produto ao carrinho no armazenamento local
        addToCart(productTitle, productPrice);
    });
});

// Função para adicionar o produto ao carrinho no armazenamento local
function addToCart(title, price) {
    // Verifica se já existe um carrinho no armazenamento local
    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];

    // Adiciona o novo produto ao carrinho
    cart.push({ title: title, price: price });

    // Atualiza o carrinho no armazenamento local
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Função para adicionar o produto ao carrinho
function addProductToCart(title, price) {
    let newCartProduct = document.createElement("tr");
    newCartProduct.classList.add("cart-product");

    newCartProduct.innerHTML =
        `
        <td class="product-identification">
            <strong class="cart-product-title">${title}</strong>
        </td>
        <td>
            <span class="cart-product-price">${price}</span>
        </td>
        <td>
            <input class="product-qtd-input" type="number" value="1" min="0">
            <button class="remove-product-button" type="button">Remover</button>
        </td>
    `;

    const tableBody = document.querySelector(".cart-table tbody");
    tableBody.append(newCartProduct);
    updateTotal();
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
};

// função para somar o valor da compra
function updateTotal() {
    let totalCarrinho = 0;
    const cartProducts = document.getElementsByClassName("cart-product");
    for (var i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].querySelector(".cart-product-price").innerText.replace("R$", "").replace(",", ".");
        const productQuantity = cartProducts[i].querySelector(".product-qtd-input").value;

        totalCarrinho += productPrice * productQuantity;
    }

    totalCarrinho = totalCarrinho.toFixed(2);
    totalCarrinho = totalCarrinho.replace(".", ",");
    document.querySelector(".card-total-container span").innerHTML = "R$" + totalCarrinho;
}
