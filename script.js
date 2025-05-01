
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
