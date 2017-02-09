$(function(){

  var addDescriptionToHeader = function(logo, name, description){
    // TODO: utiliser des selecteur de type $('.js-logo')
    var logo = $('<img>').attr('src', logo).addClass('resize-logo')

    // TODO: utiliser des selecteur de type $('.js-title')
    var groupName = $('<h3>').text(name).addClass('group-name')

    // TODO: utiliser des selecteur de type $('.js-description')
    var description = $('<p>').text(description).addClass('group-description')

    $('.js-group-picture')
      .append(logo)

    $('.js-description-group')
      .append(groupName)
      .append(description)
  }

  var addTrackToView = function(photo, track){
    // TODO: utiliser des selecteur de type $('.js-image')
    var photo = $('<img>').attr('src', photo).addClass('resize-track-picture').on('click', function(){
      // TODO:
      // enlever la class spin-circle sur toutes les images avec la method removeClass de jquery
      // et ensuite ajouter la class spin-curcle seulement sur $(this)
      $(this).toggleClass('spin-circle')
    })

    // TODO:
    // ex tutoriel pour faire ce que tu veux
    // https://www.grafikart.fr/tutoriels/html-css/lecteur-audio-html5-220
    var track = $('<audio>').attr('src', track).addClass('audio-track')

    $('.js-tracks')
      .append(photo)
      .append(track)
  }


  // TODO: pas besoin de repeter https://api-v2.hearthis.at/ à chaque fois tu peux le stocker dans une varialble et le concatener avec une string si tu veux completer l'url
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
