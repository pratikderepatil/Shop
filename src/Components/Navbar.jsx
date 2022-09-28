import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Theme } from "../Context/ThemeContext";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(Theme);

	const { state } = useContext(AuthContext);
	return (
		<div>
			Navbar
			<Button onClick={toggleTheme}>
				{theme === "light" ? "light" : "dark"}
			</Button>
			<Button>{state.isAuth ? "Logout" : "Login"}</Button>
		</div>
	);
};

export default Navbar;
