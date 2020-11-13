


// https://developer.spotify.com/documentation/web-playback-sdk/quickstart///#
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = `${process.env.REACT_APP_CLIENT_ID}`;


const scopes = [
    "user-read-recently-played",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent[parts[1]];

        return initial;
    }, {})
}
console.log(process.env.REACT_APP_CLIENT_ID)
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;