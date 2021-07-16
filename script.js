let newText = document.getElementById('text');
let addTodo = document.getElementById('add');
let cards = document.getElementById('cards');

let lengthItems = 0;
const URL = "https://606efbdf0c054f001765814c.mockapi.io/api/v1/messages"
const newObj = {
  id: null,
  title: newText.value
};

addTodo.addEventListener("click", (el) => {
  el.preventDefault()

  if (newText.value) {
    newObj.title = newText.value
    addNewItem(newObj)
    newText.value = ''
  } else {
    return
  }
});

async function addNewItem(newObj) {
  if (lengthItems < 28) {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(newObj)
    })
    loadItemsApi()
  } else {
    alert('you have maximum characters')
  }
}

async function deletItem(deletId) {
  await fetch(`${URL}/${deletId}`, {
    method: 'DELETE',
  });

  loadItemsApi()
};

function setDomElements(body) {
  cards.innerHTML = ''
  body.forEach(el => {
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const span = document.createElement('span')
    li.className = 'message'
    li.value = el.id;
    span.className = 'close'
    cards.appendChild(li)
    li.appendChild(h3)
    li.appendChild(span)
    h3.textContent = el.title;
    span.textContent = 'X';

    span.addEventListener('click', () => {
      const element = cards.removeChild(li)
      console.log(element.value);
      deletItem(element.value)
    });
  })
}

function loadItemsApi() {
  fetch(URL)
    .then(response => response.json())
    .then(body => {
      lengthItems = body.length
      setDomElements(body)
    })
    .catch(error => console.log(error))
}

loadItemsApi()



