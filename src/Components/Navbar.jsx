import { Button, Center, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Theme } from "../Context/ThemeContext";
import { LOGOUT } from "../Context/AuthContext/actions";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const { theme, toggleTheme } = useContext(Theme);

	const { state, dispatch } = useContext(AuthContext);

	return (
		<Flex justify={"space-between"} align="center" p="4">
			Navbar
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
	);
};

export default Navbar;
