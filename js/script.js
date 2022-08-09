let input = document.querySelector('#input');
let remove = document.querySelector('#remove');
let add = document.querySelector('#add');
let list = document.querySelector('#list');

add.addEventListener('click', (e) => {
    createDeleteElements(input.value)
})

function createDeleteElements(){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const inp = document.createElement('input')

    inp.className = 'form-control'
    inp.setAttribute('placeholder', 'Info')
    btn.className = 'btn btn-outline-secondary'
    btn.textContent = 'Remove'
    li.appendChild(inp);
    li.appendChild(btn);
    btn.addEventListener('click', (e) =>{
        li.remove()
    })

    list.className = 'mb-3'
    list.appendChild(li);
}