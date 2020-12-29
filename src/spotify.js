//https://developer.spotify.com/dashboard/applications/cf3511e1371044e694231b96bcd546a1

export const authEndpoint = "https://accounts.spotify.com/authorize";

export const redirectUrl = "https://spotify-clone-app-37f96.web.app/";
export const clientId = "cf3511e1371044e694231b96bcd546a1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  //console.log(window.location.hash);
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initialValue, item) => {
      let parts = item.split("=");
      initialValue[parts[0]] = decodeURIComponent(parts[1]);
      return initialValue;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
