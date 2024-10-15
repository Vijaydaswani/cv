document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const container = document.querySelector('.container');

    setTimeout(() => {
        loader.style.display = 'none';
        container.style.display = 'block';
    }, 2000); // Simulating loading time of 2 seconds
});
