const params = window.location.search.substr(1);
let all = params.split("/"); 
let artist = all[0];
let album = all[1];
let urltracks = [];
let ytracks = [];


const req_url = 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a8c031c3b6f2b093bd851d1e525234d2&artist='+artist+'&album='+album+'&format=json';
$.ajax({
    url: req_url,
    type: 'GET',
    success: function (data) {
        print_data_track(data);
    },
    error: function (data) {
        console.log(data);
    }
});

function print_data_track(data){
    for (const i in data.album.tracks.track){
        const track = data.album.tracks.track[i];
        const struct = [
        '<h3>',
        track.name,
        '</h3>'
        ];
        urltracks.push(track.url);
        $('.Tracks').append($(struct.join('')));
       }
       if (album === "In+Between+Dreams" && artist === "Jack+Johnson") {
           const frame = [
       '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLi_9g3NzCdCbpkWmXLPehKMina4nFpfq-" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        ];
        $('.yplayer').append($(frame.join('')));
       }
       
       if (album === "All+The+Right+Reasons" && artist === "Nickelback") {
           const frame = [
       '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLL4fdl7j_SiiIOpVejeFtbljQfl1qztIi" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        ];
        $('.yplayer').append($(frame.join('')));
       }
       
    }
    
function get_songs(){
    for (const i in urltracks){
        console.log(urltracks[i]);
    }
    
    }
