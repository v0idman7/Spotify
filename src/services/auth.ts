const scope = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-private",
  "user-read-email",
  "user-follow-modify",
  "user-follow-read",
  "user-library-modify",
  "user-library-read",
  "streaming",
  "app-remote-control",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  "playlist-modify-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "playlist-modify-public",
];
const client_id = "8fe2e279e91c4f888e2ed7672868a93f";

export const getAuthorizeUrl = () => {
  let url = "https://accounts.spotify.com/authorize?";
  url += "response_type=token";
  url += "&client_id=" + client_id;
  url += "&scope=" + scope.join("+");
  url += "&redirect_uri=http://localhost:3000";
  return url;
};

export const getDataFromHash = (hash: string) => {
  const arr = hash.slice(1).split("&");
  const access_token = arr[0].slice(13);
  const token_type = arr[1].slice(11);
  const expires_in = +arr[2].slice(11);
  return {
    access_token,
    token_type,
    expires_in,
  };
};
