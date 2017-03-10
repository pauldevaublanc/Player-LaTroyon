$(function(){

  var currentMp3 = null

  var loadStreamInPlayer = function(mp3){
    var audio = $('audio')[0]
    // equivalent = $('audio').attr('src', mp3)
    if (currentMp3 === mp3) {
      if (audio.paused){
        audio.play();
      } else {
        audio.pause()
      }
    } else {
      currentMp3 = mp3
      audio.src = mp3
      audio.play()
    }
  }

  var addDescriptionToHeader = function(logo, name, description){
    var logo = $('<img>').attr('src', logo).addClass('resize-logo')

    var groupName = $('<h3>').text(name).addClass('group-name')

    var description = $('<p>').text(description).addClass('group-description')

    $('.js-group-picture')
      .append(logo)

    $('.js-description-group')
      .append(groupName)
      .append(description)
  }

  var addTrackToView = function(photo, track, name){

    var photo = $('<img>')
      .attr('src', photo)
      .addClass('resize-track-picture')
      .on('click', function(){
        loadStreamInPlayer(track)
        $('img').not($(this)).removeClass('spin-circle')
        $(this).toggleClass('spin-circle')
    })

    $('.js-title').text('Tracks of '+name+'').addClass('title')

    $('.js-tracks')
      .append(photo)

  }

  $.ajax('https://api-v2.hearthis.at/latroyon/')
  .done(function(group){
    addDescriptionToHeader(group.avatar_url, group.username, group.description)
  })


  var form = $('.js-artist-form');
  var input = $('.js-artist-input');

  var resetTracks = function(){
    $('.js-title').empty().removeClass('title');
    $('.js-tracks').empty().removeClass('text-error');
  }


  form.on('submit', function(e){
    e.preventDefault()
    resetTracks();
    var artist = input.val().replace(/\s/g, "");
    input.val('');
    if (artist == "") {
      $('.js-tracks').html("<h4>Choose an artist before starting the search</h4>").addClass('text-error')
    }
    else {

      $.ajax({
        type: "GET",
        url: 'https://api-v2.hearthis.at/'+artist+'/?type=tracks',
        success: function(tracks){
          for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i]
            addTrackToView(track.background_url, track.download_url, track.user.username)
          }
        },
        error: function(){
          resetTracks()
          $('.js-tracks').addClass('text-error').html("<h4>Sorry, I don't know "+artist+"</h4>")
        }
      });
    }
  })
});


