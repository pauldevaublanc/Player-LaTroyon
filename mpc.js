$(function(){

  var keyboard = [
    {

      id: 1,
      key: 97,
      sound: '1.mp3'
    },
    {
      id: 2,
      key: 122,
      sound: '2.mp3'
    },
    {
      id: 3,
      key: 101,
      sound: '3.mp3'
    },
    {
      id: 4,
      key: 114,
      sound: '4.mp3'
    },
    {
      id: 5,
      key: 116,
      sound: '5.mp3'
    },
    {
      id: 6,
      key: 121,
      sound: '6.mp3'
    },
    {
      id: 7,
      key: 113,
      sound: '7.mp3'
    },
    {
      id: 8,
      key: 115,
      sound: '8.mp3'
    },
    {
      id: 9,
      key: 100,
      sound: '9.mp3'
    },
    {
      id: 10,
      key: 102,
      sound: '10.mp3'
    },
    {
      id: 11,
      key: 103,
      sound: '11.mp3'
    },
    {
      id: 12,
      key: 104,
      sound: '12.mp3'
    },
    {
      id: 13,
      key: 119,
      sound: '13.mp3'
    },
    {
      id: 14,
      key: 120,
      sound: '14.mp3'
    },
    {
      id: 15,
      key: 99,
      sound: '15.mp3'
    },
    {
      id: 16,
      key: 118,
      sound: '16.mp3'
    },
  ];

  var addSoundInTouch = function() {
    id: 1,
    $('.mpc-pad-list').children().click(function(evt){
      var clicked = evt.target;
      var currentID = clicked.id;
      $('<audio>').attr({'src':'MPC/sounds/'+currentID+'.mp3', 'autoplay':'autoplay'})
    })
  }
  $('.mpc-screen').on('click', addSoundInTouch())

  $('.mpc-screen').click(function(){
    $('#js-power-button').addClass('power-on')
    $('.js-screen-text').fadeOut(function(){
      $(this).text('Lets play').fadeIn();
    })
  })

});
