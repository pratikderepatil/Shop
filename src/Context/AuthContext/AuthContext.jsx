import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AuthContext = createContext();

const initState = {
	isLoading: false,
	isError: false,
	data: {},
	isAuth: false,
};

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<AuthContext.Provider value={{ state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
