const params = window.location.search.substr(1);
let artist, album = params.split("&"); 
console.log(artist);

const req_url = 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a8c031c3b6f2b093bd851d1e525234d2&artist='+artist+'&album='+album+'&format=json';
$.ajax({
    url: req_url,
    type: 'GET',
    success: function (data) {
        print_data_track();
    },
    error: function (data) {
        console.log(data);
    }
});

function print_data_track(data){
    for (const i in data.tracks.track){
        const track = data.tracks.track[i];
        const struct = [
        '<h3>',
        track.name,
        '</h3>',
        ];
        console.log(struct.join(''));
        console.log($('.Tracks'));
        $('.Tracks').append($(struct.join('')));
       }
    }