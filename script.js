
let inputText = document.getElementById('input-text');
let buttonAdd = document.querySelector('.add');
let buttonClose = document.getElementById('del0')
let containerCards = document.querySelector('.card-wrapper')

let listMessage = [];

buttonAdd.addEventListener('click', function () {
    let newTodo = {
        todo: inputText.value,

    };
    if (inputText.value == "") {
        alert('Please enter a new message!');
    } else {
        listMessage.push(newTodo);
        newMessage()
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
                <div>
                    <h3>${elem.todo}</h3>
                </div>
                <div>
                <button id="del${index}" class="close">X</button>
                </div>
            </li>
        `;
        containerCards.innerHTML = displayMessage;
    })
}




