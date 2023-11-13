document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        

        function handleVisibility() {
            if (isElementInViewport(card) && card.style.opacity === '0') {
                card.style.opacity = '1';
                
                window.removeEventListener('scroll', handleVisibility);
            }
        }

        window.addEventListener('scroll', handleVisibility);
        handleVisibility();
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
