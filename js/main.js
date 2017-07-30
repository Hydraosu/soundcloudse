$('document').ready(function() {
  $('div.addon').hide();
  $('input#search').on('keyup', function(event) {
    if (event.keyCode == 13) { // 13 = Enter Key
      $('button3').click();
    }
  });

  function createListItem(item, item2, item3) {
    var li = $('<li class="clearfix">');
    li.append('<h2>' + item + '</h2>');
    if (!item2) {
      li.append('<img class="round" src="img/no-image.png" /> <br>');
    } else {
      li.append('<img class="round" src="' + item2 + '" ><br> ');
    }
    li.append('<a href="' + item3 + '?client_id=a281614d7f34dc30b665dfcaa3ed7505'+ '" download="song"> Download </a>');
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
      url: 'https://api.soundcloud.com/tracks?client_id=a281614d7f34dc30b665dfcaa3ed7505&q=' + track,
      data: {
        format: 'json'
      },

      success: function(data) {
        $('ul').empty();

        for (var i = 0; i < data.length; i++) {
          var title = data[i].title;
          var img = data[i].artwork_url;
          var download = data[i].stream_url;
          $('div.addon').show();
          $('ul').append(createListItem(title, img, download));
        }

      }
    });
  });
});
