var worksNames = ["Software Engineer", "Web designer", "Frotend Developer"];
var iterator = 0;
var works = document.getElementById("works");

window.addEventListener('resize', () => {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener("load", function() {
    setInterval(changesItems, 4000);
});

function changesItems() {
    if(works.firstChild) works.removeChild(works.firstChild);
    if(iterator > 2) iterator = 0;
    var texto = document.createTextNode(worksNames[iterator++]);
    works.appendChild(texto);
}

function showMenu() {
    var viewportWidth = window.innerWidth;
    if (viewportWidth < 768) {
        var menu = document.querySelector("#navigation ul");
        menu.classList.toggle("mobile");
    }
}

function validateForm() {
    console.log("Comprobación de campos");
}