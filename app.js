let rect = document.getElementById("div"); 

rect.addEventListener("mousemove", function(details){
    var rectLocation = rect.getBoundingClientRect();
    var mouseLocation = details.clientX;
    var insideRect = mouseLocation - rectLocation.left;

    if(insideRect<rectLocation.width/2){
        let redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgba(${redColor}, 0 ,0)`,
            ease: Power4
        })
    }else{
        let blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRect);
        gsap.to(rect, {
            backgroundColor: `rgba(0, 0 ,${blueColor})`,
            ease: Power4
        })
    }
})

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor: "white",
    })
})









