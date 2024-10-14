document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');
    const sections = document.querySelectorAll('section');

    // Hide loader and show content
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.opacity = 1;

        // Add in-view class to sections
        sections.forEach(section => {
            section.classList.add('in-view');
        });
    }, 2000);
});
