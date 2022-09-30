import {
	Box,
	Button,
	Center,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputLeftAddon,
	InputRightElement,
	PinInput,
	PinInputField,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false);
	const [first, setFirst] = useState("");
	const [last, setLast] = useState("");
	const [otp, setOtp] = useState("");
	const [email, setEmail] = useState("");
	const [confirmPassword, SetConfirmPassword] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");

	const isError = password !== confirmPassword;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("first", first);
		console.log("last", last);
		console.log("email", email);
		console.log("password", password);
		console.log("phone", phone);
		console.log("Otp", otp);
		axios({
			method: "POST",
			url: `https://kphxpz.sse.codesandbox.io/users`,
			data: {
				email: email,
				password: password,
				otp: otp,
				firstname: first,
				lastname: last,
				phone: phone,
			},
		})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<Container
				maxW={{ base: "full", lg: "container.xl", sm: "full" }}
				p={{ lg: "8", sm: "0", xs: "0" }}
			>
				<Box
					w={{ sm: "96%", md: "80%", lg: "60%" }}
					borderWidth="1px"
					borderRadius="lg"
					borderColor="gray.400"
					p="8"
					m="auto"
				>
					<form onSubmit={handleSubmit}>
						<Heading as="h1" size="lg">
							Create an account
						</Heading>
						<br />
						<Grid
							templateColumns={{
								lg: "repeat(2,1fr)",
								md: "repeat(2,1fr)",
								sm: "repeat(1,1fr)",
							}}
							gap="5"
						>
							<GridItem>
								<FormControl isRequired>
									<FormLabel>First Name</FormLabel>
									<Input
										type={"text"}
										placeholder={"First name here"}
										value={first}
										onChange={(e) => setFirst(e.target.value)}
										borderColor="gray.400"
									/>
								</FormControl>
							</GridItem>
							<GridItem>
								<FormControl isRequired>
									<FormLabel>Last Name</FormLabel>
									<Input
										type={"text"}
										placeholder={"Last name here"}
										value={last}
										onChange={(e) => setLast(e.target.value)}
										borderColor="gray.400"
									/>
								</FormControl>
							</GridItem>
						</Grid>
						<br />
						<FormControl isRequired>
							<FormLabel>Email</FormLabel>
							<Input
								type={"email"}
								placeholder={"Enter Email"}
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								borderColor="gray.400"
							/>
						</FormControl>
						<br />
						<Grid
							templateColumns={{
								lg: "repeat(2,1fr)",
								md: "repeat(2,1fr)",
								sm: "repeat(1,1fr)",
							}}
							gap="5"
						>
							<GridItem>
								<FormControl isRequired>
									<FormLabel>Password</FormLabel>
									<InputGroup size="md">
										<Input
											pr="4.5rem"
											type={show ? "text" : "password"}
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											borderColor="gray.400"
											placeholder="Enter password"
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
							</GridItem>
							<GridItem>
								<FormControl isRequired isInvalid={isError}>
									<FormLabel>Confirm Password</FormLabel>
									<InputGroup size="md">
										<Input
											pr="4.5rem"
											type={show1 ? "text" : "password"}
											borderColor="gray.400"
											placeholder="Re-enter password"
											value={confirmPassword}
											onChange={(e) => SetConfirmPassword(e.target.value)}
										/>
										<InputRightElement width="4.5rem">
											<Button
												h="1.75rem"
												size="sm"
												colorScheme="blue"
												onClick={() => {
													setShow1(!show1);
												}}
											>
												{show1 ? "Hide" : "Show"}
											</Button>
										</InputRightElement>
									</InputGroup>
									{isError ? (
										<FormErrorMessage>
											Password and Confirm password don't match
										</FormErrorMessage>
									) : (
										""
									)}
								</FormControl>
							</GridItem>
						</Grid>
						<br />
						<FormControl isRequired>
							<FormLabel>Phone Number</FormLabel>
							<InputGroup>
								<InputLeftAddon
									children="+91"
									bgColor={"transparent"}
									borderColor="gray.400"
								/>
								<Input
									type="tel"
									placeholder="phone number"
									bgColor={"transparent"}
									borderColor="gray.400"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</InputGroup>
						</FormControl>
						<br />
						<FormControl isRequired>
							<FormLabel>Set Pin</FormLabel>
							<Box>
								<HStack>
									<PinInput
										borderColor="gray.400"
										value={otp}
										onChange={(value) => setOtp(value)}
									>
										<PinInputField borderColor="gray.400" />
										<PinInputField borderColor="gray.400" />
										<PinInputField borderColor="gray.400" />
										<PinInputField borderColor="gray.400" />
									</PinInput>
								</HStack>
							</Box>
						</FormControl>
						<br />
						<Center>
							<Button mt={4} colorScheme="teal" type="submit" w={"80%"}>
								Create new account
							</Button>
						</Center>
					</form>
				</Box>
			</Container>
		</div>
	);
};

export default Signup;
