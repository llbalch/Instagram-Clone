const followbtn = document.querySelector('#follow');
let joinMV = false

followbtn.addEventListener('click', () => {
    if (joinMV === false) {
        joinMV = true
        alert(`You've followed Joinmultiverse!`)
    } else if (joinMV === true) {
    alert(`You've followed Joinmultiverse!`)
}})