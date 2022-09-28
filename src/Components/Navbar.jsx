import React, { useContext } from "react";
import { Theme } from "../Context/ThemeContext";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(Theme);

	return (
		<div>
			Navbar
			<button onClick={toggleTheme}>
				{theme === "light" ? "light" : "dark"}
			</button>
		</div>
	);
};

export default Navbar;
