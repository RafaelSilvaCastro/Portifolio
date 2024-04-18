// Adicionar manipuladores de evento aos botões "ADICIONAR AO CARRINHO"
const addToCartButtons = document.querySelectorAll(".btn.add-to-cart-btn");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Encontrar o elemento pai do botão (div .produtos-box)
        const productBox = button.closest(".produtos-box");

        // Extrair os detalhes do produto
        const productTitle = productBox.querySelector(".product-title").innerText;
        const productPrice = productBox.querySelector(".product-price").innerText;

        // Adicionar o produto ao carrinho
        addProductToCart(productTitle, productPrice);

        // Mostrar alerta
        alert("Produto adicionado ao carrinho!");
    });
});

// Adicionar manipuladores de evento para remoção de produtos e atualização do total
const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", removeProduct);
}

const quantityInputs = document.getElementsByClassName("product-qtd-input");
for (var i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener("change", updateTotal);
}

// Função para adicionar o produto ao carrinho no armazenamento local
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

// Função para remover um produto do carrinho
function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
}

// Função para calcular e atualizar o total do carrinho
function updateTotal() {
    let totalCarrinho = 0;
    const cartProducts = document.getElementsByClassName("cart-product");
    for (var i = 0; i < cartProducts.length; i++) {
        const productPrice = parseFloat(cartProducts[i].querySelector(".cart-product-price").innerText.replace("R$", "").replace(",", "."));
        const productQuantity = parseFloat(cartProducts[i].querySelector(".product-qtd-input").value);

        totalCarrinho += productPrice * productQuantity;
    }

    totalCarrinho = totalCarrinho.toFixed(2);
    totalCarrinho = totalCarrinho.replace(".", ",");
    document.querySelector(".card-total-container span").innerHTML = "R$" + totalCarrinho;
}
