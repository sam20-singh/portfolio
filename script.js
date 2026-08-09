function hamburg() {
    const navbar = document.querySelector('.dropdown');
    if (navbar) navbar.style.transform = 'translateY(0px)';
}

function cancel() {
    const navbar = document.querySelector('.dropdown');
    if (navbar) navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    'Java Developer',
    'AI Enthusiast',
    'Electronics Engineer'
];

let speed = 110;
const textElements = document.querySelector('.typewriter-text');

if (textElements) {
    let textIndex = 0;
    let characterIndex = 0;

    function typeWriter() {
        if (characterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1200);
        }
    }

    function eraseText() {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 45);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter, 400);
        }
    }

    window.onload = typeWriter;
}