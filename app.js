function scroolAppear() {
    var introText = document.querySelector('.intro_text');
    var intrpositon = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    if (intrpositon < screenPosition) {
        introText.classList.add('intro_appear');
    }
}

window.addEventListener('scroll', scroolAppear);