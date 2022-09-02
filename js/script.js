document.addEventListener("DOMContentLoaded", function(){
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 800
      });
    //let headerMain = document.querySelector("header");
    let menuButton = document.querySelector(".burger");
    let menuButtonMobile = document.querySelector(".burger-mobile");
    let leftMenuBody = document.querySelector(".mobile-wrapper");
    menuButton.addEventListener("click", function(){
        if(menuButton.classList.contains("active")){
            menuButton.classList.remove("active");
            leftMenuBody.classList.remove("active");
            menuButtonMobile.classList.remove("active")
        }
        else{
            menuButton.classList.add("active");
            leftMenuBody.classList.add("active");
            menuButtonMobile.classList.add("active")
        }
    })
    menuButtonMobile.addEventListener("click", function(){
        if(leftMenuBody.classList.contains("active")){
            menuButton.classList.remove("active");
            leftMenuBody.classList.remove("active");
            menuButtonMobile.classList.remove("active");
        }
    })
});