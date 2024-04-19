let carrinho = [];
let total = 0;

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // Verificar se há itens salvos no localStorage
    const savedCart = JSON.parse(localStorage.getItem("carrinho"));
    if (savedCart) {
        carrinho = savedCart;
        atualizarCarrinho();
    }

    // Adicionar funcionalidade ao botão de remover
    const removeProductButtons = document.getElementsByClassName("remove-product-button");
    for (let button of removeProductButtons) {
        button.addEventListener("click", removeProduct);
    }
}

function adicionarItem(preco) {
    carrinho.push(preco);
    total += preco;
    atualizarCarrinho();
}

function removerItem(index) {
    total -= carrinho[index];
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaItens = document.getElementById('itens-carrinho');
    const totalElemento = document.getElementById('total');

    listaItens.innerHTML = '';
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Item ${index + 1} - R$${item} `;
        const button = document.createElement('button');
        button.textContent = 'Remover';
        button.classList.add("remove-product-button");
        button.onclick = () => removerItem(index);
        li.appendChild(button);
        listaItens.appendChild(li);
    });

    totalElemento.textContent = total.toFixed(2);

    // Salvar carrinho no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}
