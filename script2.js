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
}

let user = {
    name: 'John',
    surname: 'Smith'
};

let response = fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
});

let result = response.json();
alert(result.message);


//fetch('https://jsonplaceholder.typicode.com/my_posts', {
//    method: 'POST',
//    body: JSON.stringify({
//        title: 'yu',
//        body: 'bar',
//        userId: 1,
//    }),
//    headers: {
//        'Content-type': 'application/json; charset=UTF-8',
//    },
//})
//    .then((response) => response.json())
//    .then((json) => console.log(json));

//fetch('https://jsonplaceholder.typicode.com/my_posts')
//    .then((response) => response.json())
//    .then((json) => console.log(json));