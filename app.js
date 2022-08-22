
$(window).on('load', function(){
  setTimeout(removeLoader, 4000);

});
function removeLoader(){
    $( "#preloader" ).fadeOut(500, function() {

      $( "#preloader" ).remove();
  });
}



const lamp = document.querySelector('.lamp');
const body = document.querySelector('body');

lamp.onclick = function(){
  body.classList.toggle('dark')
}
