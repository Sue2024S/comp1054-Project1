

const skipLink = document.querySelector(".skip-link");
window.addEventListener("scroll", function() {

    if(window.scrollY > 0) {
        skipLink.classList.add("show");
    } else {
        skipLink.classList.remove("show");
    }		

});

function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}