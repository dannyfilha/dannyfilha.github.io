document.querySelector('#botaoMenuMobile').addEventListener('click', function() {
    var menuArea = document.querySelector('#menu-mobile');
    menuArea.style.display = "block";
});

function closeMenu() {
    var menuArea = document.querySelector('#menu-mobile');
    menuArea.style.display = "none";
}
