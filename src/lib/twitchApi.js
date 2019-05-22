import axios from "axios";

const twitchAPI = axios.create({
  baseURL: "https://api.twitch.tv/kraken/",
  headers: {
    "Client-ID": process.env.TWITCH_CLIENT_ID,
  },
});
export default twitchAPI;

// * Search for streams with a results limit (default is set by state)
export function searchStreams(query, limit) {
  return twitchAPI.get(`search/streams/?query=${query}&limit=${limit}`);
}

// * Get a Stream
export function getStream(paramsId) {
  return twitchAPI.get(`/streams/${paramsId}`);
}

// * Get top streams
export function getTopStreams() {
  return twitchAPI.get("streams");
}
