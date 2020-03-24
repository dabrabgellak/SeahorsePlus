/*
 * This script receibes the parameters sending throught the URL
 * genre: Genre that we receibed by the URL
 * */
const genre = window.location.search.substr(1);

/*
 * Request to get the albums from a genre
 * req_url: URL that contains the genre get the albums of that genre, you must to send the arguments genre and 
 * also the API key
 * It receibes the data that the API sends and we send it throght a function to print it. 
 * */
 const req_url = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag='+genre+'&api_key=a8c031c3b6f2b093bd851d1e525234d2&format=json';
$.ajax({
  url: req_url,
  type: 'GET',
  success: function (data) {
      print_data_Albums(data);
    },
    error: function (data) {
      console.log(data);
    }
  });


/*
 * print_data_Albums: Function that receibes the data of the request and print the Albums that the genre contains
 * We search the album througt the data and only gets one album and put it dynamically in the class that contains it in the HTML
 * */
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

/*
 * Request to get the artist from a genre
 * req_urlartist: URL that contains the genre and get the artist of that genre, you must to send the arguments genre and 
 * also the API key
 * It receibes the data that the API sends and we send it throght a function to print it. 
 * */
const req_urlartist = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag='+genre+'&api_key=a8c031c3b6f2b093bd851d1e525234d2&format=json';
$.ajax({
  url: req_urlartist,
  type: 'GET',
  success: function (data) {
      console.log(data);
      print_data_Artist(data);
    },
    error: function (data) {
      console.log(data);
    }
  });


/*
 * print_data_Albums: Function that receibes the data of the request and print the artist that the genre contains
 * We search the track througt the data and only gets one track and put it dynamically in the class that contains it in the HTML
 * */
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
