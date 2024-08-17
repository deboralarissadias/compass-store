// Funcionalidade de fechar a div de promoção preta fina
function closeHeaderTop() {
  document.querySelector(".header-top").style.display = "none";
}

// Funcionalidade do navbar mobile
function menuHamburger() {
  var navs = document.querySelectorAll(".navbar__items");

  navs.forEach((nav) => nav.classList.toggle("navbar__toggleShow"));
}

document.querySelector(".navbar__link-toggle").addEventListener("click", menuHamburger);

// Funcionalidade da caixa de pesquisa
function openSearch() {
    var searchContainer = document.querySelector(".search-container-mobile");
    if (searchContainer.style.display === "flex") {
        searchContainer.style.display = "none";
    } else {
        searchContainer.style.display = "flex";
    }
}

// Funcionalidade do contador númerico
function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1; // Fiz o uso do ternário para definir o incremento de quanto vai subir
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    
    let timer = setInterval(function() {
        current += increment;
        obj.textContent = current.toLocaleString("en") + "+";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
window.onload = function() {
    animateValue("stat1", 0, 200, 2000);   
    animateValue("stat2", 0, 2000, 2000);  
    animateValue("stat3", 28000, 30000, 2000);
};

//Array com todos os produtos da seção product 1
const productsOne = [
  {
    id: "0",
    name: "T-shirt with Tape Details",
    rating: 4.5,
    price: {
      value: 120,
      formatted_price: "$120",
    },
    disccount_price: {
      percentage: 0,
      value: 0,
      formatted_price: "$0",
    },
    image_url: "./assets/images/products/product1.png",
  },
  {
    id: "1",
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: {
      value: 260,
      formatted_price: "$260",
    },
    disccount_price: {
      percentage: 20,
      value: 260,
      formatted_price: "$240",
    },
    image_url: "./assets/images/products/product2.png",
  },
  {
    id: "2",
    name: "Checkered Shirt",
    rating: 4.5,
    price: {
      value: 180,
      formatted_price: "$180",
    },
    disccount_price: {
      percentage: 0,
      value: 0,
      formatted_price: "$0",
    },
    image_url: "./assets/images/products/product3.png",
  },
  {
    id: "3",
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: {
      value: 160,
      formatted_price: "$160",
    },
    disccount_price: {
      percentage: 30,
      value: 130,
      formatted_price: "$130",
    },
    image_url: "./assets/images/products/product4.png",
  },
];

//Array com todos os produtos da seção product 2
const productsTwo = [
  {
    id: "5",
    name: "Vertical Striped Shirt",
    rating: 5.0,
    price: {
      value: 232,
      formatted_price: "$232",
    },
    disccount_price: {
      percentage: 20,
      value: 212,
      formatted_price: "$212",
    },
    image_url: "./assets/images/products/product5.png",
  },
  {
    id: "6",
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    price: {
      value: 145,
      formatted_price: "$145",
    },
    disccount_price: {
      percentage: 0,
      value: 0,
      formatted_price: "$0",
    },
    image_url: "./assets/images/products/product6.png",
  },
  {
    id: "7",
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: {
      value: 80,
      formatted_price: "$80",
    },
    disccount_price: {
      percentage: 0,
      value: 0,
      formatted_price: "$0",
    },
    image_url: "./assets/images/products/product7.png",
  },
  {
    id: "8",
    name: "Faded Skinny Jeans",
    rating: 4.5,
    price: {
      value: 210,
      formatted_price: "$210",
    },
    disccount_price: {
      percentage: 0,
      value: 0,
      formatted_price: "$0",
    },
    image_url: "./assets/images/products/product8.png",
  },
];    

function generateProductCards(products, id) {
  const container = document.getElementById(id);
  
  container.innerHTML = ""; // Limpa o conteúdo anterior

  products.forEach((product) => {
    const discount =
      product.disccount_price.percentage > 0
        ? `<span class="product-price-old">${product.price.formatted_price}</span>
           <span class="product-discount">-${product.disccount_price.percentage}%</span>`
        : "";

    const card = `
        <div class="product-card">
          <img src="${product.image_url}" alt="${
      product.name
    }" class="product-image">
          <a href="#" class="product-name">${product.name}</a>
          <div class="stars-rating">${generateStarsRating(product.rating, true)}</div>
          <div class="product-price-container">
            <span class="product-price">
            ${
              product.disccount_price.percentage > 0
                ? product.disccount_price.formatted_price ||
                  product.price.formatted_price
                : product.price.formatted_price
            }
            </span>
            ${discount}
          </div>
        </div>
      `;
    container.insertAdjacentHTML("beforeend", card);
  });
}

// Função para gerar o HTML das estrelas
function generateStarsRating(rating, showrating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += `<span class="star filled">★</span>`;
    } else if (rating > i - 1 && rating < i) {
      stars += `<span class="star half-filled">★</span>`;
    } else {
      stars += `<span class="star">★</span>`;
    }
  }

  if (showrating) {
    return `${stars} <span class="stars-rating-text">${rating.toFixed(1)}<span class="stars-rating-text-light">/5</span></span>`;
  } else {
    return stars;
  }
}
  
// Inserindo os produtos da New Arrivals section
generateProductCards(productsOne, "new-arrivals-cards-container");

// Inserindo os produtos da Top Selling section
generateProductCards(productsTwo, "top-selling-cards-container");

// Array de comentários dos consumidores
const customerReviews = [
  {
    id: "00000",
    rating_review: 5,
    name: "Sarah M.",
    verified: true,
    text: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
  },
  {
    id: "00001",
    rating_review: 5,
    name: "Sarah M.",
    verified: true,
    text: "\"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.\"",
  },
  {
    id: "00002",
    rating_review: 5,
    name: "Alex K.",
    verified: true,
    text: "\"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.\"",
  },
  {
    id: "00003",
    rating_review: 5,
    name: "James L.",
    verified: true,
    text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"",
  },
  {
    id: "00004",
    rating_review: 5,
    name: "Mooen P.",
    verified: true,
    text: "\"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.\"",
  },
];

function generateCustomerReviews() {
  const container = document.getElementById("customer-reviews-cards-container");
  container.innerHTML = ""; // Limpa qualquer conteúdo existente

  // Detecta o tamanho da tela e define se é responsivo
  const isMobile = window.innerWidth < 992;

  customerReviews.forEach((review) => {
    const card = `
        <div class="customer-review-card">
          <div class="stars-rating">${generateStarsRating(
            review.rating_review,
            false
          )}</div>
          <div class="customer-review-header">
            <span class="customer-review-name">${review.name}</span>
            ${
              review.verified
                ? '<img src="./assets/images/icons/checked.svg" alt="Verified" class="customer-review-verified">'
                : ""
            }
          </div>
          <div class="customer-review-text">${review.text}</div>
        </div>
      `;

    container.insertAdjacentHTML("beforeend", card);
  });

  // Ajuste a barra de rolagem dos comentários no início para centralizar 
  if (isMobile) {
    centerScrollPosition(container, 1); // Centralizar o primeiro comentário
  } else {
    centerScrollPosition(container, 0);
  }

  // Funcionalidade dos botões de navegação setas
  document.querySelector(".nav-button.left").addEventListener("click", () => {
    if (isMobile) {
      container.scrollLeft -= container.clientWidth; // Ajusta a distância conforme necessário
    } else {
      container.scrollLeft -= 300; // Ajusta a distância conforme necessário
    }
  });

  document.querySelector(".nav-button.right").addEventListener("click", () => {
    if (isMobile) {
      container.scrollLeft += container.clientWidth; // Ajusta a distância conforme necessário
    } else {
      container.scrollLeft += 300; // Ajusta a distância conforme necessário
    }
  });
}

function centerScrollPosition(container, visibleCards = 0) {
  if (visibleCards === 0) {
    const container = document.getElementById("customer-reviews-cards-container");
    container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
  } else {
    const cardWidth = container.querySelector('.customer-review-card').offsetWidth;
    container.scrollLeft = (cardWidth * visibleCards - container.clientWidth) / 2;
  }
}

generateCustomerReviews();

// Validação do campo de email
document.getElementById('subscribe-btn').addEventListener('click', function(event) {
  var emailInput = document.getElementById('email-input');
  var emailError = document.getElementById('email-error');
  var subscribeBtn = document.getElementById('subscribe-btn');

  // Regex para validar o email

  //stackoverflow
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = 'block';
      subscribeBtn.style.display = 'none';
      event.preventDefault(); // Prevenir o envio do formulário
  } else {
      emailError.style.display = 'none';
      subscribeBtn.style.display = 'block';
      
  }
});

// Esconder o alerta e mostrar o botão quando o usuário começar a digitar no campo de email
document.getElementById('email-input').addEventListener('input', function() {
  var emailError = document.getElementById('email-error');
  var subscribeBtn = document.getElementById('subscribe-btn');

  emailError.style.display = 'none';
  subscribeBtn.style.display = 'block';
});
