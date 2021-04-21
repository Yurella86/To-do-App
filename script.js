let newText = document.getElementById('text');
let button = document.getElementById('add');


button.addEventListener("click", async function () {
  await newMessage();
});

async function newMessage() {
  let res = await fetch("https://606efbdf0c054f001765814c.mockapi.io/api/v1/messages");
  let body = res.json();
  return console.log('1');
}

