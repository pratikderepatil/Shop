import { Button, Center, Flex, Grid, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Theme } from "../Context/ThemeContext";
import { LOGOUT } from "../Context/AuthContext/actions";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(Theme);
	const { state, dispatch } = useContext(AuthContext);
	const catgeories = [
		"Mens",
		"Womens",
		"Health & Nutrition",
		"Kids",
		"Electronics",
	];

	return (
		<div
			className={theme === "light" ? "lightNav" : "darkNav"}
			style={{ position: "sticky", top: "0px" }}
		>
			<Flex
				direction={"column"}
				justify={"space-between"}
				p={[2, 2, 4]}
				gap={2}
			>
				<Flex gap={4} justify="space-between">
					<Image
						src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"
						alt="Shop.com"
						w={[100, 120, 120]}
						pl={[0, 0, 4]}
						mr={[0, 30, -200]}
					/>
					<Search />
					<div></div>
				</Flex>
				<Flex gap={4} justify="space-between">
					<div></div>
					<Grid
						pl={6}
						gap={4}
						templateColumns={{
							lg: "repeat(5,auto)",
							md: "repeat(3,auto)",
							sm: "repeat(3,auto)",
						}}
					>
						{catgeories?.map((ele) => {
							return (
								<NavLink to={`/product/${ele}`} key={ele}>
									<Button variant={"link"} color="teal">
										{ele}
									</Button>
								</NavLink>
							);
						})}
					</Grid>

					<Flex gap={4}>
						<Button onClick={toggleTheme} variant="unstyled">
							{theme === "light" ? (
								<ion-icon name="moon-sharp" size="sm" />
							) : (
								<ion-icon name="sunny-sharp" size="sm" />
							)}
						</Button>
						<NavLink to="/checkout">
							<Button variant={"unstyled"} size="sm">
								<Center>
									<ion-icon name="cart-sharp" />
								</Center>
							</Button>
						</NavLink>
						{state.isAuth ? (
							<Button
								size="sm"
								colorScheme="green"
								onClick={() => {
									dispatch({ type: LOGOUT });
								}}
							>
								Logout
							</Button>
						) : (
							<NavLink to="/login">
								<Button colorScheme="green" size="sm">
									Login
								</Button>
							</NavLink>
						)}
					</Flex>
				</Flex>
			</Flex>
		</div>
	);
};

export default Navbar;
