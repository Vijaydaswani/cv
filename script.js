// Add optional JavaScript for animations, tooltips, or hover effects here

// Example: Add hover effect to tool cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.1)";
    });
    card.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});
