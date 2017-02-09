$(function(){

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

  var addTrackToView = function(photo, track){
    var photo = $('<img>').attr('src', photo).addClass('resize-track-picture').on('click', function(){
      $(this).toggleClass('spin-circle')
    })

    var track = $('<audio>').attr('src', track).addClass('audio-track')

    $('.js-tracks')
      .append(photo)
      .append(track)
  }

  $.ajax('https://api-v2.hearthis.at/latroyon/')
  .done(function(group){
    addDescriptionToHeader(group.avatar_url, group.username, group.description)
  })

  $.ajax('https://api-v2.hearthis.at/latroyon/?type=tracks')
  .done(function(tracks){
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i]
      addTrackToView(track.background_url, track.waveform_data)
    }
  })

});
