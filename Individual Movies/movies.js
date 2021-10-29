$(function(){

    // logo changes with hover
$(".nav-logo").mouseenter(function() {
    $(this).find("img").attr("src", "../Images/logo1.png")
});

$(".nav-logo").mouseleave(function() {
    $(this).find("img").attr("src", "../Images/logo2.png")
});


    //navigation
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


//individual movie page content

$(function() {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id');

const url ='https://api.themoviedb.org/3/movie/' + id + '?api_key=9bff47053902d522f6ec7ea9926c68c2'
$.getJSON(url, function(results){

     var image = "https://image.tmdb.org/t/p/original/" + results.poster_path;
     var title = results.original_title;
     var description = results.overview;
     var rating = results.vote_average;
     var prod =  results.production_companies;
     var status = results.status;
     var tag = results.tagline;
     var lang = results.original_language;


        $(".title").text(title);
        $(".rating").text(rating);
        $(".movie-image").css("background-image","url("+image+")");
        $(".desc p").text(description);
        $(".status p").text(status);
        $(".tagline p").text(tag);
        $(".language p").text(lang);

        addToWatchLaterSetup(id,image)
});
});
});





function addToWatchLaterSetup(id, image){
    var moviedetails = [{
        id: id,
        title: $('.title').text(),
        ratting: $('.rating').text(),
        image: image,
    }]
    addToWatchLater(moviedetails)
};

function addToWatchLater(){
    let savedMovies = localStorage.getItem("watchLaterList");
    if(savedMovies === null){
        savedMovies = JSON.parse(savedMovies);
        savedMovies.forEach(element => {
            console.log(element)
            if(element.id === movieId){
                alert(`${element.title} has already been added to the watch later list.`);
            }
        });

    } else {
        watchlaterlist = JSON.stringify(savedMovies)
        localStorage.setItem("watchLaterList", watchlaterlist)
    }
}

$('.watch-later-btn').click(function (e) { 
    e.preventDefault();
    addToWatchLater
    
});