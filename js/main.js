const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /*click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-carousel method call for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:responsive
    });

    //click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1500);
    })

    //AOS instance

    AOS.init();

});
