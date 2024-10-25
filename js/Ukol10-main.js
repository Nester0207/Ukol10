let elmsButton = document.querySelectorAll("button")[0];
let elmsCesko = document.querySelectorAll(".cesko")[0];
let elmsUkrajina = document.querySelectorAll(".ukrajina")[0];
elmsButton.addEventListener("click",() => {
    elmsCesko.innerText = "Ukrajina";
    elmsUkrajina.innerHTML = "Cesko";
})