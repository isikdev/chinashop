$('.watch__card-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }
    ]
});