
function showSlide(indexSlide){
    let slide = document.getElementsByClassName('slide');

    switch (indexSlide) {
        case 1:
            
            slide[0].style.opacity = "1";
            slide[1].style.opacity = "0.2";
            slide[2].style.opacity = "0.2";
            slide[3].style.opacity = "0.2";
            
            break;
        case 2:
            
            slide[1].style.opacity = "1";
            slide[0].style.opacity = "0.2";
            slide[2].style.opacity = "0.2";
            slide[3].style.opacity = "0.2";

            break;
        case 3:

            slide[2].style.opacity = "1";
            slide[0].style.opacity = "0.2";
            slide[1].style.opacity = "0.2";
            slide[3].style.opacity = "0.2";
            
            break;
        case 4:

            slide[3].style.opacity = "1";
            slide[0].style.opacity = "0.2";
            slide[1].style.opacity = "0.2";
            slide[2].style.opacity = "0.2"; 
            break;
                            
        default:
            
            break;
    
    }

}
function showSlideByScroll(){
    //el que contiene a cada slide
    let slide_container = document.getElementsByClassName('slides');
    let ancho_slide= slide_container[0].scrollWidth/4;
    let posX_Actual = slide_container[0].scrollLeft;

    // los slides
    let slide = document.getElementsByClassName('slide');

   console.log(ancho_slide);

    switch (posX_Actual) {
        case ancho_slide*0:
            
            slide[0].style.opacity = "1";
            slide[1].style.opacity = "0.2";
            slide[2].style.opacity = "0.2";
            slide[3].style.opacity = "0.2";
            
            break;
        case ancho_slide*1:
            
            slide[1].style.opacity = "1";
            slide[0].style.opacity = "0.2";
            slide[2].style.opacity = "0.2";
            slide[3].style.opacity = "0.2";

            break;
        case ancho_slide*2:

            slide[2].style.opacity = "1";
            slide[0].style.opacity = "0.2";
            slide[1].style.opacity = "0.2";
            slide[3].style.opacity = "0.2";
            
            break;
        case ancho_slide*3:

            slide[3].style.opacity = "1";
            slide[0].style.opacity = "0.2";
            slide[1].style.opacity = "0.2";
            slide[2].style.opacity = "0.2"; 
            break;
                            
        default:
            
            break;
    
    }

}
let slide = document.getElementsByClassName('slides');
slide[0].addEventListener('scroll', function(){
    // console.log(slide[0].scrollLeft)
    showSlideByScroll();
})

