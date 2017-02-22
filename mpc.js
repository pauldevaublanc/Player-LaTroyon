$(function(){

  var addSoundInTouch = function() {
    $('.mpc-pad-list').children().click(function(evt){
      var clicked = evt.target;
      var currentID = clicked.id;
      $('<audio>').attr({'src':'MPC/sounds/'+currentID+'.mp3', 'autoplay':'autoplay'})
    })
  }
  $('.mpc-screen').on('click', addSoundInTouch)

  $('.mpc-screen').click(function(){
    $('#js-power-button').addClass('power-on')
    $('.js-screen-text').fadeOut(function(){
      $(this).text('Lets play').fadeIn();
    })
  })

});
