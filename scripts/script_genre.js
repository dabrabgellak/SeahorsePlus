const genre = window.location.search.substr(1);

const rurl = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag='+genre+'&api_key=a8c031c3b6f2b093bd851d1e525234d2&format=json';
$.ajax({
  url: rurl,
  type: 'GET',
  success: function (data) {
      print_data_Albums(data);
    },
    error: function (data) {
      console.log(data);
    }
  });

function print_data_Albums(data){
  for (const d in data.albums.album) {
    let art_name, album_name;
    const album = data.albums.album[d];
    art_name = album.artist.name;
    album_name = album.name;
    art_name =  art_name.replace(/\s/g, '+');
    album_name = album_name.replace(/\s/g, '+');
    const struct = [
    '<div class="container">',
    '<a href=template_album.html?',art_name,'/',album_name,'>',
    '<div class="imag">',
    '<img src="',album.image[2]['#text'],'"></img>',
    '</div>',
    '<h3>',
    album.name,
    '</h3>',
    '<div class="artist">',
    '<h4>',
    album.artist.name,
    '</h4>',
    '</div>',
    '</a>',
    '</div>'    
    ];
    console.log(struct.join(''));
    console.log($('.Albums'));
    $('.Albums').append($(struct.join('')));
   }
}

const rurlartist = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag='+genre+'&api_key=a8c031c3b6f2b093bd851d1e525234d2&format=json';
$.ajax({
  url: rurlartist,
  type: 'GET',
  success: function (data) {
      console.log(data);
      print_data_Artist(data);
    },
    error: function (data) {
      console.log(data);
    }
  });

function print_data_Artist(data){
  for (const d in data.topartists.artist) {
    const artist = data.topartists.artist[d];
    const struct = [
    '<div class="container">',
    '<div class="imag">',
    '<img src="',artist.image[2]['#text'],'"></img>',
    '</div>',
    '<h3>',
    artist.name,
    '</h3>',
    '</div>'    
    ];
    console.log(struct.join(''));
    console.log($('.Artist'));
    $('.Artist').append($(struct.join('')));
   }
}
