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

function validateLogin() {

    let email = document.querySelector('.email_l').value;
  
    //   Expression to test email
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    // if (email.match(emailCheck)) {
    //     //fine
    // } else {
    //   alert('Please enter a valid email address.');
    //   return false;
    // }
  }
  
  function validateSignup() {

    let email = document.querySelector('.email_s').value;
    let password1 = document.querySelector('.pass1').value;
    let password2 = document.querySelector('.pass2').value;
    let user = document.querySelector('.user').value;
  
    //   Expression to test email
    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    //if (email.match(emailCheck)) {
      //if (user.length >= 8) {
        if (password1 === password2) {
          return true;
        } else {
          alert('Passwords need to match.');
          return false;
        }
      // } else {
      //   alert('Username needs to be at least 8 characters.');
      //   return false;
      // }
    // } else {
    //   alert('Please enter a valid email address.');
    //   return false;
    // }
  }
  