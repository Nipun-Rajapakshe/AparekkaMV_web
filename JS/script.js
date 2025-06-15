// JS can be extended here later for interactivity
    console.log("Welcome to Aparekka Maha Vidyalaya website!");
    const msg1 = "This Website is under construction.";
    alert(msg1);

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

// Quick Intro - Counter
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Counter එකේ speed එක (වැඩි වෙනකොට speed එක අඩු වෙනවා)

    const animateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        let current = 0;
        const increment = target / speed;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    };

    const counterSection = document.querySelector('.counter-section');
    let hasAnimated = false; // Animation එක එක පාරක් විතරක් වෙන්න

    const handleScroll = () => {
        const sectionTop = counterSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Counter Section එක screen එකේ පේනවද බලනවා
        // 0 - sectionTop: counterSection එකේ උඩ කොටස screen එකේ උඩින් කොච්චර දුරකින්ද කියලා
        // windowHeight - sectionTop: screen එකේ පහලට කොච්චර දුරක් තියෙනවද කියලා
        // sectionTop < windowHeight: counterSection එක screen එකේ පහලින් පටන් ගන්නේ
        // sectionTop + counterSection.clientHeight > 0: counterSection එක screen එකේ උඩින් ඉවර වෙන්නේ නැහැ
        if (sectionTop < windowHeight && sectionTop + counterSection.clientHeight > 0 && !hasAnimated) {
            counters.forEach(counter => {
                animateCount(counter);
            });
            hasAnimated = true; // animation එක කරා කියලා සලකුණු කරනවා
            window.removeEventListener('scroll', handleScroll); // animation එක උනාට පස්සේ listener එක අයින් කරනවා
        }
    };

    window.addEventListener('scroll', handleScroll);
});

// Scroll Animation

AOS.init({
        duration: 1000,
        once: true,
    });