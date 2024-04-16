const removeProductButtons = document.getElementsByClassName("remove-product-button");
for (var i = 0; i < removeProductButtons.length; i++){
    removeProductButtons[i].addEventListener("click", function(){
        console.log('clicou')
    })
}