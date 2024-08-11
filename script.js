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


function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    
    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current + "+";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

window.onload = function() {
    animateValue("stat1", 0, 200, 2000);   
    animateValue("stat2", 0, 2000, 2000);  
    animateValue("stat3", 0, 30000, 2000);
};

