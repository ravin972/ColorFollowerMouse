var rect = document.querySelector(".rectangle");

rect.addEventListener("mousemove", (e) => {
    var rectLocation = rect.getBoundingClientRect();
    var insideRectValue = e.clientX - rectLocation.left;

    if(insideRectValue < rectLocation.width/2){
        var greenColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRectValue);
        gsap.to(rect,{
            backgroundColor: `rgb(0, ${greenColor}, 0)`,
            ease: Power3,
        });
    }else{
        var redColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRectValue);
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power3,
        });
    }
});

rect.addEventListener("mouseleave", (e)=>{
        gsap.to(rect,{
            backgroundColor: `#FFFFFF`,
        });
});