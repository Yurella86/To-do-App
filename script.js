let newText = document.getElementById('text');
let add = document.getElementById('add');
let cards = document.getElementById('cards');


add.addEventListener('click', function () {
  if (newText.value === '') {
    alert('Please enter a new message!')
  } else {
    //sendObject(newText.value);
    loadNewName()
  }
})


async function sendObject(text) {
  let user = {
    name: text
  };

  let res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  let result = await res.json();
  alert(result.message);

}

async function loadNewName() {
  let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  let arrayObject = await res.json()
  for (const key in arrayObject) {
    const elementObject = arrayObject[key];
    let li = document.createElement('li')
    li.className = 'message';
    cards.appendChild(li)

    let h3 = document.createElement('h3')
    h3.innerHTML = elementObject;
    li.appendChild(h3);
    let buttonClose = document.createElement('button')
    buttonClose.id = 'del';
    buttonClose.className = 'close';
    buttonClose.innerHTML = 'X';
    li.appendChild(buttonClose);
  }

}

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