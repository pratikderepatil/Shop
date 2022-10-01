import { Button, Center, Flex, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Theme } from "../Context/ThemeContext";
import { LOGOUT } from "../Context/AuthContext/actions";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(Theme);

	const { state, dispatch } = useContext(AuthContext);

	return (
		<div
			className={theme === "light" ? "lightNav" : "darkNav"}
			style={{ position: "sticky", top: "0px" }}
		>
			<Flex justify={"space-between"} align="center" p="2">
				<Flex>
					<Image
						src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg"
						alt="Shop.com"
						h="40px"
					/>
				</Flex>
				<Flex gap={4}>
					<Button onClick={toggleTheme} variant="unstyled">
						{theme === "light" ? (
							<ion-icon name="moon-sharp" />
						) : (
							<ion-icon name="sunny-sharp" />
						)}
					</Button>
					<NavLink to="/checkout">
						<Button variant={"unstyled"}>
							<Center>
								<ion-icon size="medium" name="cart-sharp" />
							</Center>
						</Button>
					</NavLink>
					{state.isAuth ? (
						<Button
							colorScheme="green"
							onClick={() => {
								dispatch({ type: LOGOUT });
							}}
						>
							Logout
						</Button>
					) : (
						<NavLink to="/login">
							<Button colorScheme="green">Login</Button>
						</NavLink>
					)}
				</Flex>
			</Flex>
		</div>
	);
};

export default Navbar;
