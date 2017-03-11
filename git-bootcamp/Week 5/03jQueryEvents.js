// JavaScript File
//travis rand
// 3/4/17

$(function(){
    
    
  $("button").each(function() {
      $(this).click(function() { 
          $(this).css("background-color", "pink");
      });
  });
  
  $("input").on("keyup", function(event) {
      console.log("You have pressed" + event.which);
  });
  
  $("h1").each(function() {
      $(this).click(function() {
          $(this).css("color", "purple");
      });
  });
  
});