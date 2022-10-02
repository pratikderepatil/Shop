import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Homepage from "../Pages/Homepage";
import Checkout from "../Pages/Checkout";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";

const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="product/:prod" element={<Products />} />
			<Route
				path="product/productDetails/:details"
				element={<ProductDetails />}
			/>
		</Routes>
	);
};

export default AllRoutes;
