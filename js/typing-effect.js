document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-greeting", {
        strings: ["Hello I'm"], // Text to type
        typeSpeed: 50,          // Speed of typing
        backSpeed: 25,          // Speed of backspacing
        loop: false,            // Repeat the animation
    });

    new Typed("#typed-name", {
        strings: ["Kolla Prakyath"], // Text to type
        typeSpeed: 70,
        backSpeed: 35,
        startDelay: 1500,      // Delay before typing starts
        loop: false,
    });

    new Typed("#typed-role", {
        strings: ["Full Stack Java Developer"], // Text to type
        typeSpeed: 90,
        backSpeed: 45,
        startDelay: 3500,      // Delay before typing starts
        loop: false,
    });
});
