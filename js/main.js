$(document).ready(function() {
    $(window).scroll(() => {
        // neu lan chuot thi an thanh tim kiem
        $('.search-form-tuyet').removeClass('active') 
        // navbar nam tren cung neu lan chuot
        if ($(window).scrollTop() > 80 ) {
            $('.header-tuyet .header-2-tuyet').addClass('active');
        }
        else {
            $('.header-tuyet .header-2-tuyet').removeClass('active');
        }
    });

    $(document).on("click", "#search-btn-tuyet", () => {
        $('.search-form-tuyet').toggleClass('active')
    });
});