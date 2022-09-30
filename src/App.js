import { useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Theme } from "./Context/ThemeContext";
import AllRoutes from "./Routes/AllRoutes";

function App() {
	const { theme } = useContext(Theme);

	return (
		<div className={theme === "light" ? "light" : "dark"}>
			<Navbar />
			<AllRoutes />
		</div>
	);
}

export default App;
