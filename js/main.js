$('document').ready(function() {
  $('input#search').on('keyup', function(event) {
    if (event.keyCode == 13) { // 13 = Enter Key
      $('button3').click();
    }
  });
	//test
  function createListItem(item, item2, item3) {
    var li = $('<li>');
    li.append('<h2>' + item + '</h2>');
    if (!item2) {

      li.append('Brak obrazka! <br>');
    } else {
      li.append('<img src="' + item2 + '" > <br>');
    }
    li.append('<a href="' + item3 + '?client_id=f17c1d67b83c86194fad2b1948061c9e' + '" > Download </a>');
    return li;

  }
  $('input#search').on('keyup', function(event) {
    if (event.keyCode == 13) { // 13 = Enter Key
      $('button').click();
    }
  });
  $('button').click(function() {
    var track = $('input#search').val();

    $.ajax({
      url: 'https://api.soundcloud.com/tracks?client_id=f17c1d67b83c86194fad2b1948061c9e&q=' + track,
      data: {
        format: 'json'
      },

      success: function(data) {
        $('ul').empty();

        for (var i = 0; i < data.length; i++) {
          var title = data[i].title;
          var img = data[i].artwork_url;
          var download = data[i].stream_url;
          $('ul').append(createListItem(title, img, download));
        }

      }
    });
  });
});
