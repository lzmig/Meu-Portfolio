const introOverlay = document.getElementById('introOverlay');
const introLogo = document.getElementById('introLogoCenter');

if (introOverlay && introLogo) {
    setTimeout(() => {
        introLogo.classList.add('hide');
        setTimeout(() => {
            introOverlay.classList.add('open');
        }, 300);
    }, 1200);
}