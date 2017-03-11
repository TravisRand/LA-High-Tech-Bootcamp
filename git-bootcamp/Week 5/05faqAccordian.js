// JavaScript File
// travis rand
// 3/4/17
$(document).ready(function(){

    $(".q").on("click", function() {
        $(this).next().slideToggle(1000);
        $(this).children(0).toggleClass("rotate");
    });
});
