function adjustHeader() {
    const header = document.querySelector('header');
    const logo = document.getElementById('headerLogo');
    const topArrow = document.getElementById('topArrow');

    if (!header || !logo || !topArrow) return; // Safeguard

    if (window.innerWidth > 900) {
        const topArrowPosition = topArrow.getBoundingClientRect().bottom;

        if (topArrowPosition < 0) {
            header.style.backgroundColor = 'white';
            logo.style.height = '100px';
        } else {
            header.style.backgroundColor = 'transparent';
            logo.style.height = '150px';
        }
    } else {
        header.style.backgroundColor = 'transparent';
        logo.style.height = '200px';
    }
}

// Run on scroll
window.addEventListener('scroll', adjustHeader);

// Run once after page load
window.addEventListener('load', adjustHeader);
