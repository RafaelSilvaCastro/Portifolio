let carrinho = [];
let total = 0;

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

function adicionarItem(preco, nome) {
    // Verificar se o item já está no carrinho
    const itemIndex = carrinho.findIndex(item => item.nome === nome);
    if (itemIndex !== -1) {
        // Se sim, apenas atualizar a quantidade e o total
        carrinho[itemIndex].quantidade++;
        carrinho[itemIndex].subtotal += preco;
    } else {
        // Se não, adicionar um novo item ao carrinho
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1,
            subtotal: preco
        });
    }
    
    total += preco;
    atualizarCarrinho();
}

function removerItem(index) {
    total -= carrinho[index].subtotal;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaItens = document.getElementById('itens-carrinho');
    const totalElemento = document.getElementById('total');

    // Verificar se os elementos foram encontrados antes de tentar acessá-los
    if (!listaItens || !totalElemento) {
        console.error("Elementos 'itens-carrinho' ou 'total' não foram encontrados.");
        return; // Encerra a função se os elementos não foram encontrados
    }

    listaItens.innerHTML = '';
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - Quantidade: ${item.quantidade} - Subtotal: R$${item.subtotal.toFixed(2)}`;
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
