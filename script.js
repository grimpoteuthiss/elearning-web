document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.testimonial-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

new TypeIt("#codeQuest", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("codeqest", { delay: 300 })
    .move(-3)
    .delete(1)
    .type("Qu", { delay: 300 })
    .move(-5)
    .delete(1)
    .type("C")
    .move(null, { to: "END" })
    .type("!")
    .go();