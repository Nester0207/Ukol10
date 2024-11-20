let elmsButton = document.querySelectorAll("button")[0];
let elmsZelva = document.querySelectorAll(".zelva")[0];
let elmsKocka = document.querySelectorAll(".kocka")[0];

elmsButton.addEventListener("click",() => {
    let textKocka = elmsKocka.innerHTML;
    let textZelva = elmsZelva.innerHTML;

    elmsKocka.innerHTML = textZelva;
    elmsZelva.innerHTML = textKocka;

    console.log(textKocka,textZelva);

})
