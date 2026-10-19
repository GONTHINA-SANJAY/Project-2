let slideContainer=document.querySelector(".slider-container");
let leftSlider=document.querySelector(".left-slider");
let rightSlider=document.querySelector(".right-slider");
let upButton=document.querySelector(".up-button");
let downButton=document.querySelector(".down-button");
let slideLength=rightSlider.querySelectorAll("div").length;
let activeSlide=0;
leftSlider.style.top=`-${(slideLength-1)*100}vh`;
upButton.addEventListener('click',()=>changeSlide("up"));
downButton.addEventListener('click',()=>changeSlide("down"));
let changeSlide=(direction)=>{
    let  len=slideContainer.clientHeight;
    if(direction==="up"){
        activeSlide++;
        if(activeSlide>slideLength-1){
            activeSlide=0;
        }
    }
    else if(direction==="down"){
        activeSlide--;
        if(activeSlide<0){
            activeSlide=slideLength-1;
        }

        }
    
    rightSlider.style.transform=`translateY(-${activeSlide*len}px)`;
    leftSlider.style.transform=`translateY(${activeSlide*len}px)`;


}