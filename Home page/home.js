$(function(){

    // logo changes with hover
$(".nav-logo").mouseenter(function() {
    $(this).find("img").attr("src", "../Images/logo1.png")
});

$(".nav-logo").mouseleave(function() {
    $(this).find("img").attr("src", "../Images/logo2.png")
});


    //hamburger icon
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", mobileMenu);
    
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}




});