const arrow = document.getElementById('scrollArrow');
const targetSection = document.getElementById('topArrow');
const scrollAmount = window.innerHeight; // Scroll by one screen height

// Function to handle arrow visibility based on screen width and scroll position
function updateArrowVisibility() {
    if (window.innerWidth < 900) {
        arrow.style.display = 'none'; // Hide the arrow on smaller screens
    } else if (window.scrollY >= targetSection.offsetTop) {
        arrow.style.display = 'block'; // Show arrow after scrolling past target section
    } else {
        arrow.style.display = 'none'; // Hide the arrow if at the top
    }
}

// Handle scroll event to flip the arrow at the top/bottom
window.addEventListener('scroll', () => {
    updateArrowVisibility();

    // Debugging: Log current scroll position, window height, and document height
    console.log('scrollY:', window.scrollY);
    console.log('window.innerHeight:', window.innerHeight);
    console.log('document.documentElement.scrollHeight:', document.documentElement.scrollHeight);

    // Check if the page is at the bottom (allow for any minor scroll offset)
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;

    console.log('isAtBottom:', isAtBottom); // Debugging

    if (isAtBottom) {
        arrow.style.transform = 'rotate(180deg)'; // Flip the arrow when at the bottom
    } else if (window.scrollY === 0) {
        arrow.style.transform = 'rotate(0deg)'; // Reset arrow if at the top
    }
});

// Handle window resize to update arrow visibility
window.addEventListener('resize', updateArrowVisibility);

// Initial check on page load
updateArrowVisibility();

// Scroll behavior when arrow is clicked
function scrollPage() {
    // If at the bottom, scroll to the top
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
    }
}
