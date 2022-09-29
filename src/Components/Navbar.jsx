import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Theme } from "../Context/ThemeContext";
import { LOGOUT } from "../Context/AuthContext/actions";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(Theme);

	const { state, dispatch } = useContext(AuthContext);

	return (
		<div>
			Navbar
			<Button onClick={toggleTheme}>
				{theme === "light" ? "light" : "dark"}
			</Button>
			{state.isAuth ? (
				<Button
					onClick={() => {
						dispatch({ type: LOGOUT });
					}}
				>
					Logout
				</Button>
			) : (
				<Button>Login</Button>
			)}
		</div>
	);
};

export default Navbar;
