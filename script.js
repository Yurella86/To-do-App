
let inputText = document.getElementById('input-text');
let buttonAdd = document.querySelector('.add');
let buttonClose = document.getElementById('del0')
let containerCards = document.querySelector('.card-wrapper')

let listMessage = [];

buttonAdd.addEventListener('click', function () {
    let newTodo = {
        todo: inputText.value,
        checked: false,
        important: false
    };
    listMessage.push(newTodo);
    newMessage()
});

function newMessage() {
    let displayMessage = '';
    listMessage.forEach(function (elem, index) {
        displayMessage += `
        <li class="message">
                <div>
                    <h3>${elem.todo}</h3>
                </div>
                <div>
                <button id="del${index}" class="close"><img src="./img/close.png" alt=""></button>
                </div>
            </li>
        `;
        containerCards.innerHTML = displayMessage;
    })
}




