$(function(){
    $('.gnb').hover(function(){
        $('.lnb').stop().slideToggle(300);
        $('.back').stop().slideToggle(300);
    });


    setInterval(slideImg);


    $('.popup-open').click(function(){
        $('.popup').fadeIn(500);
    });
    $('.close').click(function(){
        $('.popup').fadeOut(500);
    });

    $('.family').click(function(){
        const site = $(this).val();
        location.href = site;

    })

});
    function slideImg(){
        $('.slide-in').animate({
            'left' : '-1200px'
        }, 3000, function(){
            $('.slide-in img:eq(0)').clone().appendTo('.slide-in');
            $('.slide-in img:eq(0)').remove();
            $('.slide-in').css('left',0);
        });
    };