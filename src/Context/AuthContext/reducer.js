
export const reducer = (state, { type, payload }) => {
	switch (type) {
		case "LOGIN_LOADING": {
			console.log("enter");
			return {
				...state,
				isLoading: true,
				isAuth: false,
				data: {},
				isError: false,
			};
		}
		case "LOGIN_SUCCESS": {

			return {
				...state,
				isLoading: false,
				isAuth: true,
				data: payload,
				isError: false,
			};
		}
		case "LOGIN_FAILURE": {
			return {
				...state,
				isLoading: false,
				isAuth: false,
				data: {},
				isError: true,
			};
		}
		case "LOGOUT": {
			console.log("klasfh");
			return {
				...state,
				isLoading: false,
				isAuth: false,
				data: {},
				isError: false,
			};
		}
		default:
			return state;
	}
};
