$(document).ready( function () {
   $(".aside").html(aside()); 

   $('a').click( function(){
      $('.aside_content').html(view(event.target.id));
  });

});
