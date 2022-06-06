import SpotifyWebApi from "spotify-web-api-node";
const scopes = [
    "user-read-emails",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-emails",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
].join(',');

const params ={
    scope:scopes,

}

const queryParamString = new UrlSearchParams(params).toString()