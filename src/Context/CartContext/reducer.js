const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART": {
			return [...state, action.payload];
		}
		case "REMOVE_FROM_CART": {
			const cart = state.filter((ele) => ele.id !== action.payload);
			return cart;
		}
		case "CHECKOUT": {
			return [];
		}
		default: {
			return state;
		}
	}
};

export default reducer;
