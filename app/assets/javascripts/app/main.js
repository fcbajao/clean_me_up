$(document).ready(function() {
  mainContainer = $('#teams-container');

  teamAContainer = $('<div class="team-list team-a"><h2>Team A</h2></div>').appendTo(mainContainer);
  $.each(DATA.teamA, function(idx, user) {
    $('<div><a href="#">'+user.name+'</a><p>'+user.bio+'</p></div>').appendTo(teamAContainer);
  });

  teamBContainer = $('<div class="team-list team-b"><h2>Team B</h2></div>').appendTo(mainContainer);
  $.each(DATA.teamA, function(idx, user) {
    $('<div><a href="#">'+user.name+'</a><p>'+user.bio+'</p></div>').appendTo(teamBContainer);
  });

  $('.team-a a').click(function(e){
    e.preventDefault();

    name = $(this).parent().find('a').text();
    bio = $(this).parent().find('p').text();

    $('body').append('<div class="team-modal team-a-modal">' +
      '<header><h3>' + name + '</h3><button>X</button></header>' +
      '<div><p>' + bio + '</p></div>' +
    '</div>');

    $('.team-a-modal button').click(function () {
      $(this).closest('.team-modal').remove();
    });
  });

  $('.team-b a').click(function(e){
    e.preventDefault();

    name = $(this).parent().find('a').text();
    bio = $(this).parent().find('p').text();

    $('body').append('<div class="team-modal team-b-modal">' +
      '<header><h3>' + name + '</h3><button>X</button></header>' +
      '<div><p>' + bio + '</p></div>' +
    '</div>');

    $('.team-b-modal button').click(function () {
      $(this).closest('.team-modal').remove();
    });
  });
});
