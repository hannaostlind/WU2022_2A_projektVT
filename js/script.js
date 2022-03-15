// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var miniheader = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = miniheader.offsetTop;

// Add the sticky class to the header when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        miniheader.classList.add("sticky");
    } else {
        miniheader.classList.remove("sticky");
    }
}