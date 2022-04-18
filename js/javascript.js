$(document).ready(function() {
    $(document).on("click", ".icon-tuyet", function() {
        var classNav = $("#myTopnav-tuyet").attr("class");
        console.log(classNav);
        if (classNav === "topnav-tuyet")
            $("#myTopnav-tuyet").addClass("responsive-tuyet");
        else 
        $("#myTopnav-tuyet").removeClass("responsive-tuyet");
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-tuyet");
  let dots = document.getElementsByClassName("dot-tuyet");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}