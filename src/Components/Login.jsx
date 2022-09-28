import {
	Box,
	Button,
	Center,
	Container,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Theme } from "../Context/ThemeContext";

const Login = () => {
	const { theme } = useContext(Theme);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [show, setShow] = useState(false);

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	const isError = email === "";
	const isErrorP = password === "";

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(password, email);
	};
	return (
		<div className={theme === "light" ? "light" : "dark"}>
			<Container
				maxW={{ base: "full", lg: "container.xl" }}
				p={{ lg: "8", sm: "0", xs: "0" }}
			>
				<Grid
					templateColumns={{
						lg: "repeat(2,1fr)",
						md: "repeat(2,1fr)",
						sm: "repeat(1,1fr)",
					}}
					gap="4"
					pl={{ lg: "20", sm: "0" }}
					pr={{ lg: "20", sm: "0" }}
				>
					<GridItem
						rowSpan={1}
						borderColor="gray.400"
						borderWidth="1px"
						borderRadius="lg"
						p="8"
					>
						<Box>
							<form onSubmit={handleSubmit}>
								<Heading as="h1" size="lg">
									Login
								</Heading>
								<br />
								<FormControl isRequired isInvalid={isError}>
									<FormLabel>Email address</FormLabel>
									<Input
										ref={inputRef}
										type="email"
										borderColor="gray.400"
										placeholder="name@example.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
									{!isError ? (
										<FormHelperText>
											We'll never share your email.
										</FormHelperText>
									) : (
										<FormErrorMessage>Email is required.</FormErrorMessage>
									)}
								</FormControl>
								<br />
								<FormControl isRequired isInvalid={isErrorP}>
									<FormLabel>Password</FormLabel>
									<InputGroup size="md">
										<Input
											pr="4.5rem"
											type={show ? "text" : "password"}
											placeholder="Enter password"
											borderColor="gray.400"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
										<InputRightElement width="4.5rem">
											<Button
												h="1.75rem"
												size="sm"
												colorScheme="blue"
												onClick={() => {
													setShow(!show);
												}}
											>
												{show ? "Hide" : "Show"}
											</Button>
										</InputRightElement>
									</InputGroup>
								</FormControl>
								<br />
								<Center>
									<Button mt={4} colorScheme="teal" type="submit" w={"80%"}>
										Submit
									</Button>
								</Center>
							</form>
						</Box>
					</GridItem>
					<GridItem
						rowSpan={1}
						borderWidth="1px"
						borderRadius="lg"
						borderColor="gray.400"
						p="8"
					>
						<Grid gap={"4"}>
							<GridItem>
								<Heading as="h1" size="lg">
									Don't have an account?
								</Heading>
							</GridItem>
							<Spacer />
							<GridItem>
								<Text>
									With a SHOP.COM account, you can enjoy the following benefits:
									up to 50% Cashback on eligible purchases, redeem discount
									coupons, order status and history, saved payment options and
									addresses, exclusive emails and more.
								</Text>
							</GridItem>
							<Spacer />
							<GridItem>
								<Center>
									<Button colorScheme={"teal"} w={"80%"}>
										Sign Up
									</Button>
								</Center>
							</GridItem>
						</Grid>
					</GridItem>
				</Grid>
			</Container>
		</div>
	);
};

export default Login;
