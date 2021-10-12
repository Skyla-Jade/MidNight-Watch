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

    $(".SUbutton").on("click", function(){
    
    
            var firstName = $(".first").val();
            var lastName = $(".last").val();
            var emailAdd = $(".email").val();
            var pass1 = $(".pass1").val();
            var pass2 = $(".pass2").val();
    
        //check password is same as current
            if(pass1 != pass2){
                alert("Your Passwords do not match!");
            }else{
                //Set storage for data
                sessionStorage.setItem("first", firstName);
                sessionStorage.setItem("last", lastName);
                sessionStorage.setItem("email", emailAdd);
               
            }
    
        });//get data onclick
    
        $(".first_out").text(sessionStorage.getItem("first"));
        $(".last_out").text(sessionStorage.getItem("last"));
        $(".email_out").text(sessionStorage.getItem("email"));
        $(".user_out").text(sessionStorage.getItem("user"));
    
    
        //clear onclick
        $(".clear").on("click", function(){
            sessionStorage.removeItem("first");
            sessionStorage.removeItem("last");
            sessionStorage.removeItem("email");
            sessionStorage.removeItem("user");  
    
        });
    


});// Ready Function End