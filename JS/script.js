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
document.addEventListener('DOMContentLoaded', () => {
    // අපි ඇනිමේට් කරන්න ඕන எல்லா elements තෝරා ගනිමු
    const animatedBoxes = document.querySelectorAll('.box');

    // Intersection Observer එක නිර්වචනය කරමු
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // මූලද්‍රව්‍යය තිරය මතට ඇවිත්ද කියලා බලමු
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // visible ක්ලාස් එක එකතු කරමු
                observer.unobserve(entry.target); // ඇනිමේෂන් එක වරක් ක්‍රියාත්මක වූ පසු observer එක ඉවත් කරමු
            }
        });
    }, {
        threshold: 0.5 // මූලද්‍රව්‍යයෙන් 50% ක් තිරය මත තිබිය යුතුයි
    });

    // හැම animated box එකක්ම observe කරමු
    animatedBoxes.forEach(box => {
        observer.observe(box);
    });
});

// Admission Hidden Content
function openTab(evt, tabName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-button").click();
});