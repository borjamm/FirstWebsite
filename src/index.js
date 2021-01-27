var worksNames = ["Software Engineer", "Web designer", "Frotend Developer"];
var iterator = 0;
var works = document.getElementById("works");

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