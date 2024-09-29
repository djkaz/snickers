const productCards = document.querySelectorAll('.product-card');

productCards.forEach(productCard => {
  const stars = productCard.querySelectorAll('.fa.fa-star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach(innerStar => innerStar.classList.remove('checked')); // Reset all stars first
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('checked'); // Add checked class up to clicked star
      }
    });
  });
});