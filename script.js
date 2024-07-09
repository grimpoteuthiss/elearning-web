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

function toggleMenu() {
    console.log("toggleMenu");
    var x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
      x.className += " open";
    } else {
      x.className = "nav-menu";
    }
    var x = document.getElementById("nav-left");
    console.log(x.className);
    if (x.className === "nav-left") {
      x.className += " open";
    } else {
      x.className = "nav-left";
    }
    var x = document.getElementById("nav-container");
    console.log(x.className);
    if (x.className === "nav-container") {
      x.className += " open";
    } else {
      x.className = "nav-container";
    }
    var x = document.getElementById("logo");
    console.log(x.className);
    if (x.className === "logo") {
      x.className += " open";
    } else {
      x.className = "logo";
    }
  }

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