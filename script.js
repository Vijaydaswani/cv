document.addEventListener("DOMContentLoaded", function () {
    // Loader animation
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
        document.querySelector(".content").style.opacity = 1;
        revealSections();
    }, 2000);

    // Reveal sections on scroll
    function revealSections() {
        const sections = document.querySelectorAll(".skills-section, .experience-section, .icons");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
});
