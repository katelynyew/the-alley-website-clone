function setUpAboutScroll() {
    const about = document.querySelector("#about");
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        about.style.transform = `translateY(${scrollY * 0.2}px)`;
    });
}
export default setUpAboutScroll;