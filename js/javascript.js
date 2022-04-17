$(document).ready(function() {
    $(document).on("click", ".icon-tuyet", function() {
        var classNav = $("#nav-tuyet").attr("class");
        console.log(classNav);
        if (classNav === "nav-tuyet")
            $("#nav-tuyet").addClass("responsive");
        else 
        $("#nav-tuyet").removeClass("responsive");
    });
});