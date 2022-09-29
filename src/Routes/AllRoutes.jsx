import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Homepage from "../Pages/Homepage";
import Checkout from "../Pages/Checkout";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route
				path="/checkout"
				element={
					<PrivateRoutes>
						<Checkout />
					</PrivateRoutes>
				}
			/>
		</Routes>
	);
};

export default AllRoutes;
