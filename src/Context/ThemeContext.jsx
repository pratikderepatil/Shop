import React, { createContext, useState } from "react";

export const Theme = createContext();

const ThemeContext = ({ children }) => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
	);
};

export default ThemeContext;
