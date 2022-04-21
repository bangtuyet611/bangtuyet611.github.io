$(document).ready(function() {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $(document).on("click", "#khoa-hoc", function() {
      $('img').each(function(){
        if ($(this).attr('id') == 'book-sample') {
          $(this).attr('src', './img/book-sample-3.png');
        }
      });
    });

    $(document).on("click", "#tieu-thuyet", function() {
      $('img').each(function(){
        if ($(this).attr('id') == 'book-sample') {
          $(this).attr('src', './img/book-sample-2.png');
        }
      });
    });

    $(document).on("click", "#van-hoc", function() {
      $('img').each(function(){
        if ($(this).attr('id') == 'book-sample') {
          $(this).attr('src', './img/book-sample-4.png');
        }
      });
    });

    $(document).on("click", "#thieu-nhi", function() {
      $('img').each(function(){
        if ($(this).attr('id') == 'book-sample') {
          $(this).attr('src', './img/book-sample-5.png');
        }
      });
    });
});