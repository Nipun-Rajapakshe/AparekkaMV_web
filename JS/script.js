// JS can be extended here later for interactivity
    console.log("Welcome to Aparekka Maha Vidyalaya website!");
    const msg1 = "This Website is under construction.";
    // alert(msg1);

const swiper = new Swiper('.swiper', {
autoplay: {
    delay: 3000,
    disableOnInteraction: false,
}, 
  loop: true,

 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});    