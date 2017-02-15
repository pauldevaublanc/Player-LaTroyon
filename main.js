$(function(){

  var loadStreamInPlayer = function(mp3){
    var audio = $('audio')[0]
    // equivalent = $('audio').attr('src', mp3)
    audio.src = mp3
    audio.load()
    audio.play()
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

    $('.js-title').text('Tracks de '+name+'')

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
    $('.js-tracks').empty();
  }


  form.on('submit', function(e){
    e.preventDefault()
    resetTracks();
    var artist = input.val().replace(/\s/g, "");
    input.val('');
    if (artist == "") {
        $('.js-tracks').html("<h2>Entre un artiste avant de lancer ta recherche</h2>").addClass('text')
      }


  $.ajax('https://api-v2.hearthis.at/'+artist+'/?type=tracks')
  .done(function(tracks){
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i]

        addTrackToView(track.background_url, track.download_url, track.user.username)
    }
  })
})
});
