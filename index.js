let slides = [
    {
        slideImage:'url("../img/slider/Clip.png")'
    },
    {
        slideImage:'url("../img/slider/slide2.png")'
    },
    {
        slideImage:'url("../img/slider/slide3.png")'
    },
    {
        slideImage:'url("../img/slider/slide4.png")'
    }
]


let slider = document.querySelector(".slider");
let left = document.querySelector(".left");
let right = document.querySelector(".right");





let number = 0;
right.addEventListener("click",function(){
    number++;
    if(number>slides.length-1){
        number = 0;
    }
    
    slider.style.backgroundImage=slides[number].slideImage;
})


left.addEventListener("click",function(){
    number--;
    if(number<0){
        number = slides.length-1;
    }
   
    
    slider.style.backgroundImage=slides[number].slideImage;
})





