$(document).ready(function(){
    /*메인슬라이더 슬라이드*/
    $('.slider').slick({
		dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
		prevArrow:".leftArrow",
		nextArrow:".rightArrow",
    });
    
    /*메인슬라이더 모바일 슬라이드*/
    $('.sliderM').slick({
		dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:false,
		nextArrow:false,
    });
    
    /*메인컨텐츠04 슬라이드*/
    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow:3,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:".arrowL",
		nextArrow:".arrowR",
    });
    
    /*메인컨텐츠04 모바일 슬라이드*/
    $('.lazyM').slick({
        lazyLoad:'ondemand',
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:".arrowLM",
		nextArrow:".arrowRM",
    });
    
    
    /*모바일 패널*/
    $(".panelBg").hide();
    
    $(".panel").click(function(){
        $(".panelBg").fadeIn();
        $(".panelMenu").css("width","80%");
    });
    
    $(".panelBg").click(function(){
        $(".panelBg").fadeOut();
        $(".panelMenu").css("width","0");
    });
    
    /*모바일 패널 클릭시 X로 모양 바꾸기*/

    
    $('.panel').on('click', function(){
        $(this).toggleClass('shown');
        $(this).toggleClass('menu-closed');
})
})
