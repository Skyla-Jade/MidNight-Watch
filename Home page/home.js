$(document).ready(function(){
    console.log("READYYY");

    

    const urlPop = 'https://api.themoviedb.org/3/movie/popular?api_key=9bff47053902d522f6ec7ea9926c68c2&language=en-US&page=1';

        //library page trending movies

        $.getJSON(urlPop,function(Popular){


            console.log(Popular.results);
            
            for(var i= 14; i < Popular.results.length; i++){

                $(".MovieTitle").text(Popular.results[i].original_title);
                $(".rating").text(Popular.results[i].vote_average);
                $(".description").text(Popular.results[i].overview);

                var image = 'https://image.tmdb.org/t/p/original' + Popular.results[i].backdrop_path +''
                $(".imgcont").css({'background-image': 'url('+ image +')'});
    
                var card = "<div class='MovieCont col-4 col-lg-2 col-md-4 col-sm-4'>\
                                <div class='MovieBlock'>\
                                <div class='Lol hover'><h2>"+ Popular.results[i].original_title +"</h2><p>"+ Popular.results[i].vote_average +"</p><p>"+ Popular.results[i].release_date +"</p></div>\
                                <div class='image'><img src='https://image.tmdb.org/t/p/original"+ Popular.results[i].poster_path +"' style='height: 100%; width: 100%; object-fit: cover'></div>\
                            </div>"
                
    
                $('.movieRow').append(card);
                $(".Lol").removeClass("hover");
                $(".Lol").css("display", "none");


                $(".MovieBlock").mouseenter(function(){
                    $(this).find(".Lol").addClass("hover");
                    $(this).find(".Lol").css("display", "block");
                })
        
            }

            $(".MovieBlock").mouseleave(function(){
                $(this).find(".Lol").removeClass("hover");
                $(this).find(".Lol").css("display", "none");
            })
    
        });//get json end

        
    // navigation /
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

}) 