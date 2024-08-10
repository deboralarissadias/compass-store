// Funcionalidade de fechar a div de promoção
function closeHeaderTop() {
  document.querySelector(".header-top").style.display = "none";
}

function menuHamburger() {
  var navs = document.querySelectorAll(".navbar__items");

  navs.forEach((nav) => nav.classList.toggle("navbar__toggleShow"));
}

document.querySelector(".navbar__link-toggle").addEventListener("click", menuHamburger);

function openSearch() {
    var searchContainer = document.querySelector(".search-container-mobile");
    if (searchContainer.style.display === "flex") {
        searchContainer.style.display = "none";
    } else {
        searchContainer.style.display = "flex";
    }
}

