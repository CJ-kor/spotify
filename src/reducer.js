export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	//REMOVE AFTER FINISHED DEVELOPING...
	// token:
	// 	"BQC7WAS_sNlhqs65TjHo8UldwrXn7h1bYZPHGdAi1k7ZGBIZsAJhU5wFFzFDXvIE1q0GqpS-WarXeIOH2lGdFntfCUEELokDMkybMHVo7M5jRHzwfwt4MxIQR6dDWJemh0yX6ZVt6Aqgl_uNWvQZFqJ_0Oz7MAs6MCMM-i6rJsdxg5bJ",
	token: null,
};

const reducer = (state, action) => {
	console.log(action);
	// Action -> type, [payload]

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};

		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};

		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
