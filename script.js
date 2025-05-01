let password = 'password'
let username = 'username'

const pass = document.querySelector('#password')
const user = document.querySelector('#username')
const submitbtn = document.querySelector('#submit')

submitbtn.addEventListener('click', (event) => {
    event.preventDefault();


    if (pass.value === password && user.value === username) {
        window.location.href = './account.html';
    } else {
        alert('Wrong username or password')
    }
})




document.getElementById('submit').addEventListener('click', function() {
    window.location.href = feed.html;
});

const followbtn = document.querySelector("#follow");
const messagebtn = document.querySelector("#message");
let joinMV = false;

followbtn.addEventListener("click", () => {
  if (joinMV === false) {
    joinMV = true;
    alert(`You've followed Joinmultiverse!`);
  } else if (joinMV === true) {
    alert(`You're already following Joinmultiverse!`);
  }
});

messagebtn.addEventListener("click", () => {
  alert(`You can't message Joinmultiverse right now. Sorry!`);
});
