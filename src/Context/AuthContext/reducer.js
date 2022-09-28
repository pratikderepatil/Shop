export const reducer = (state, { type, payload }) => {
	switch (type) {
		case "LOGIN_LOADING": {
			return {
				isLoading: true,
				isAuth: false,
				data: {},
				isError: false,
			};
		}
		case "LOGIN_SUCCESS": {
			return {
				isLoading: false,
				isAuth: true,
				data: payload,
				isError: false,
			};
		}
		case "LOGIN_FAILURE": {
			return {
				isLoading: false,
				isAuth: false,
				data: {},
				isError: true,
			};
		}
		default:
			return state;
	}
};
