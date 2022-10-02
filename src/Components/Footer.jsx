import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../Context/ThemeContext";

const Footer = () => {
	const { theme } = useContext(Theme);

	return (
		<div className={theme === "light" ? "light" : "dark"}>
			<Box>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					spacing={4}
					justify={"center"}
					align={"center"}
				>
					{/* <Logo /> */}
					<Stack direction={"row"} spacing={6}>
						<Link href={"#"}>Home</Link>
						<Link href={"#"}>About</Link>
						<Link href={"#"}>Blog</Link>
						<Link href={"#"}>Contact</Link>
					</Stack>
				</Container>

				<Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.700"}>
					<Container
						as={Stack}
						maxW={"6xl"}
						py={4}
						direction={{ base: "column", md: "row" }}
						spacing={4}
						justify={{ base: "center", md: "space-between" }}
						align={{ base: "center", md: "center" }}
					>
						<Text>© 2022 valid-circle-9091. All rights reserved</Text>
						<Stack direction={"row"} spacing={6}>
							<ion-icon name="logo-youtube"></ion-icon>
							<ion-icon name="logo-twitter"></ion-icon>
							<ion-icon name="logo-linkedin"></ion-icon>
							<ion-icon name="logo-facebook"></ion-icon>
						</Stack>
					</Container>
				</Box>
			</Box>
		</div>
	);
};

export default Footer;
