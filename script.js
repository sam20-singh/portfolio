/* =========================================
   MOBILE MENU
========================================= */

function hamburg() {

    const dropdown = document.querySelector(".dropdown");

    dropdown.style.transform = "translateY(0)";
}


function cancel() {

    const dropdown = document.querySelector(".dropdown");

    dropdown.style.transform = "translateY(-500px)";
}


/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================= */

const mobileLinks =
    document.querySelectorAll(".dropdown .links a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".dropdown").style.transform =
            "translateY(-500px)";

    });

});


/* =========================================
   TYPEWRITER EFFECT
========================================= */

const typewriterText =
    document.querySelector(".typewriter-text");

const words = [

    "Java Developer",
    "AI Enthusiast",
    "Web Developer",
    "IoT Developer",
    "Problem Solver"

];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typewriterText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    }

    else {

        typewriterText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();


/* =========================================
   MOUSE GOLD GLOW
========================================= */

const mouseGlow =
    document.querySelector(".mouse-glow");


document.addEventListener(
    "mousemove",
    function (event) {

        mouseGlow.style.left =
            event.clientX + "px";

        mouseGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================================
   MOUSE SPARKLE TRAIL
========================================= */

const sparkleContainer =
    document.querySelector(".sparkle-container");


let lastSparkleTime = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        const now =
            Date.now();


        /* Prevent too many particles */

        if (now - lastSparkleTime < 45) {

            return;

        }


        lastSparkleTime =
            now;


        createSparkle(
            event.clientX,
            event.clientY
        );

    }
);


function createSparkle(x, y) {

    const sparkle =
        document.createElement("span");


    sparkle.classList.add(
        "mouse-sparkle"
    );


    /* Random size */

    const size =
        Math.random() * 5 + 2;


    sparkle.style.width =
        size + "px";

    sparkle.style.height =
        size + "px";


    /* Starting position */

    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";


    /* Random movement */

    const moveX =
        (Math.random() - 0.5) * 70;

    const moveY =
        (Math.random() - 0.5) * 70;


    sparkle.style.setProperty(
        "--move-x",
        moveX + "px"
    );


    sparkle.style.setProperty(
        "--move-y",
        moveY + "px"
    );


    sparkleContainer.appendChild(
        sparkle
    );


    /* Remove after animation */

    setTimeout(() => {

        sparkle.remove();

    }, 700);

}


/* =========================================
   CLICK SPARKLE BURST
========================================= */

document.addEventListener(
    "click",
    function (event) {

        for (let i = 0; i < 8; i++) {

            createClickSparkle(
                event.clientX,
                event.clientY
            );

        }

    }
);


function createClickSparkle(x, y) {

    const sparkle =
        document.createElement("span");


    sparkle.classList.add(
        "mouse-sparkle"
    );


    const size =
        Math.random() * 5 + 3;


    sparkle.style.width =
        size + "px";

    sparkle.style.height =
        size + "px";


    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";


    const moveX =
        (Math.random() - 0.5) * 120;

    const moveY =
        (Math.random() - 0.5) * 120;


    sparkle.style.setProperty(
        "--move-x",
        moveX + "px"
    );


    sparkle.style.setProperty(
        "--move-y",
        moveY + "px"
    );


    sparkleContainer.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 700);

}