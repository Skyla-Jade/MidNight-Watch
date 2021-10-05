$(document).ready(function(){

    $("#signupBtn").click(function(){
        $("#main").animate({left: "22.5%"}, 400);
        $("#main").animate({left: "30%"}, 500);

        $("#loginSection").css("visibility", "hidden");
        $("#loginSection").animate({left: "25%"}, 400);

        $("#signinSection").animate({left: "17%"}, 400);
        $("#signinSection").animate({left: "30%"}, 500);
        $("#signinSection").css("visibility", "visible");
        


    });//Click Function End


    $("#loginBtn").click(function(){
        $("#main").animate({left: "77.5%"}, 400);
        $("#main").animate({left: "70%"}, 500);

        $("#signinSection").css("visibility", "hidden");
        $("#signinSection").animate({left: "75%"}, 400);

        $("#loginSection").animate({left: "83.5%"}, 400);
        $("#loginSection").animate({left: "70%"}, 500);
        $("#loginSection").css("visibility", "visible");


    });

});// Ready Function End