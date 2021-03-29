
let inputText = document.getElementById('input-text');
let buttonAdd = document.querySelector('.add');
let buttonClose = document.querySelector('.close')
let cardWrapper = document.querySelector('.card-wrapper');


let listMessage = [];
let listDelId = [];
let s = 0;

buttonAdd.addEventListener('click', function () {
    let newTodo = { todo: inputText.value };

    if (inputText.value == "") {
        alert('Please enter a new message!');
    } else {
        listMessage.push(newTodo);
        newMessage()
        listDelId.push("del" + s)
        console.log(listDelId)
        s += 1;
    }
});

buttonClose.addEventListener('click', function () {
    alert('1')
})

function newMessage() {
    let displayMessage = '';
    listMessage.forEach(function (elem, index) {
        displayMessage += `
            <li class="message">
                <h3>${elem.todo}</h3>
                <button id="del${index}" class="close">X</button>
            </li>
        `;
        cardWrapper.innerHTML = displayMessage;
        inputText.value = '';
    })
}




