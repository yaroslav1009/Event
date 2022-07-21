let blokInput = document.querySelector('.block-inputs');
let buttonRemove = document.querySelector('.btn-outline-secondary');
let buttonAdd = document.querySelector('.btn-light');
let inp = input.cloneNode(true);
function createInput(){
    blokInput.appendChild(inp)
}
function removeInput(){
    inp.remove()
}

buttonRemove.onclick = removeInput
buttonAdd.onclick = createInput