// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

// 1. click login button
// 2. redirect to spotify login page
// 3. redirect to homepage once logged in

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "f8b1502693d648fd98016f1f67718ffb";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

// codeacademy
// window.location.href.match(/access_token=([^&]*)/);

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			// #access_token=fsgrkflrlkbfdo&name=sonny&
			let parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
