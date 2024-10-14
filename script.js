document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');
    
    // Hide loader and show content
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.opacity = 1;
    }, 2000);
});
