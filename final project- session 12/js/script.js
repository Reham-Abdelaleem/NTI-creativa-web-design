// WoW
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
}
)
wow.init();

// Slideer slick
$(document).ready(function () {
  $(".company-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 800,
    cssEase: 'ease',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
// اختار كل الـ accordion buttons
// document.querySelectorAll('.accordion-button').forEach(button => {
//     button.addEventListener('click', function() {
//         const icon = this.querySelector('.accordion-icon');
//         if(this.classList.contains('collapsed')) {
//             // لو هيتفتح، نغير + → ×
//             icon.classList.remove('fa-plus');
//             icon.classList.add('fa-xmark');
//         } else {
//             // لو هيتقفل، نرجع × → +
//             icon.classList.remove('fa-xmark');
//             icon.classList.add('fa-plus');
//         }
//     });
// });


// اختار كل الـ accordion buttons
// document.querySelectorAll('.accordion-button').forEach(button => {
//     button.addEventListener('click', function() {
//         const icon = this.querySelector('.accordion-icon');
//         if(this.classList.contains('collapsed')) {
//             // لو هيتفتح، نغير + → -
//             icon.classList.remove('fa-square-plus');
//             icon.classList.add('fa-square-minus');
//         } else {
//             // لو هيتقفل، نرجع - → +
//             icon.classList.remove('fa-square-minus');
//             icon.classList.add('fa-square-plus');
//         }
//     });
// });

{/* <div class="faq-section-one">
    <div class="faq-info accordion" id="faqAccordion">

        <!-- Accordion Item 1 -->
        <div class="accordion-item">
            <h3 class="accordion-header p-0 m-0 border-0">
                <button class="accordion-button collapsed d-flex align-items-center"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne">
                    <span class="flex-grow-1">How do I book an appointment?</span>
                    <i class="fa-solid fa-plus accordion-icon ms-2"></i>
                </button>
            </h3>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    Visit our website to book an appointment.
                </div>
            </div>
        </div>

        <!-- Accordion Item 2 -->
        <div class="accordion-item">
            <h3 class="accordion-header p-0 m-0 border-0">
                <button class="accordion-button collapsed d-flex align-items-center"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo">
                    <span class="flex-grow-1">What are the working hours?</span>
                    <i class="fa-solid fa-plus accordion-icon ms-2"></i>
                </button>
            </h3>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    We are open from 8 AM to 8 PM, Monday to Saturday.
                </div>
            </div>
        </div>

    </div>
</div>
*/}

// document.querySelectorAll('.accordion-button').forEach(button => {
//     button.addEventListener('click', function() {
//         const icon = this.querySelector('.accordion-icon');

//         // لو حابة علامة X عند الفتح:
//         if(this.classList.contains('collapsed')) {
//             icon.classList.remove('fa-plus');
//             icon.classList.add('fa-xmark'); // ← X
//         } else {
//             icon.classList.remove('fa-xmark');
//             icon.classList.add('fa-plus'); // ← +
//         }

//         // لو حابة علامة - عند الفتح بدل X:
//         // if(this.classList.contains('collapsed')) {
//         //     icon.classList.remove('fa-plus');
//         //     icon.classList.add('fa-minus'); // ← -
//         // } else {
//         //     icon.classList.remove('fa-minus');
//         //     icon.classList.add('fa-plus'); // ← +
//         // }
//     });
// });
