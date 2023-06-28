
submitBtn = document.getElementById("submit-btn");
ratingPage = document.querySelector(".rating-state");
ratingsList = document.querySelectorAll(".rating-btn")
thankYouPage = document.getElementById("thank-you-page");
ratingValue = document.getElementById("rating-value");
let rating = null;





submitBtn.addEventListener("click", function(){
    console.log("Button Clicked!");
    if(rating !== null){
        thankYouPage.classList.remove("hidden");
        ratingPage.style.display = "none";
    }


})


for(let ratings of ratingsList){
    
    ratings.addEventListener('click', function(){
        console.log(ratings.innerHTML)
        ratingValue.innerHTML= ratings.innerHTML;
        rating = ratings.innerHTML;
    })
    console.log(ratings.innerHTML)
}

