let newText = document.getElementById('text');
let add = document.getElementById('add');
let cards = document.getElementById('cards');

add.addEventListener('click', function () {
    if (newText.value === '') {
        alert('Please enter a new message!')
    } else {
        createNewEl(newText.value)
        newText.value = '';
    }
})




function createNewEl(text) {
    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    let buttonClose = document.createElement('button')
    h3.innerHTML = text;
    li.className = 'message';
    li.appendChild(h3);
    li.appendChild(buttonClose);
    buttonClose.id = 'del';
    buttonClose.className = 'close';
    buttonClose.innerHTML = 'X';
    cards.appendChild(li)
    buttonClose.addEventListener('click', function () {
        cards.removeChild(li)
    })



    console.log(li)
}

