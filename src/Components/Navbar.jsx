import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Theme } from "../Context/ThemeContext";
import { LOGOUT } from "../Context/AuthContext/actions";
import { NavLink } from "react-router-dom";

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
				<NavLink to="/login">
					<Button>Login</Button>
				</NavLink>
			)}
		</div>
	);
};

export default Navbar;
