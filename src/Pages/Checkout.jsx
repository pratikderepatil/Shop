import {
	Alert,
	AlertIcon,
	Box,
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormLabel,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	PinInput,
	PinInputField,
	Table,
	TableContainer,
	Tbody,
	Td,
	Tfoot,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkout } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContext";
import { Theme } from "../Context/ThemeContext";

const Checkout = () => {
	const { dispatch, state } = useContext(CartContext);
	const { theme } = useContext(Theme);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const finalRef = React.useRef(null);
	const [otp, setOtp] = useState("");

	return (
		<div className={theme === "light" ? "light" : "dark"}>
			<Box>
				<TableContainer
					mt={{ base: 20, sm: 20, md: 20, lg: 20 }}
					mb={{ base: 20, sm: 20, md: 20, lg: 20 }}
					m="auto"
				>
					<Center>
						<Table
							variant={"simple"}
							colorScheme={"black"}
							size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
							w="60%"
							borderWidth={1}
							borderColor={theme === "light" ? "black" : "white"}
						>
							<Thead>
								<Tr>
									<Th>PRODUCT</Th>
									<Th>Price</Th>
								</Tr>
							</Thead>
							<Tbody>
								{state.map((ele) => {
									let nm = ele.name.split(" ");
									nm = `${nm[0]} ${nm[1]} ${nm[2]} ${nm[3]}`;
									return (
										<Tr>
											<Td>{nm}</Td>
											<Td>Rs. {ele.current_price}</Td>
										</Tr>
									);
								})}
							</Tbody>
							<Tfoot>
								<Tr>
									<Th>FINAL PRICE</Th>
									<Th>
										{Math.round(state.reduce((a, c) => a + c.current_price, 0))}
									</Th>
								</Tr>
							</Tfoot>
						</Table>
					</Center>
				</TableContainer>
				<br />
				<br />
				<Center>
					<Button
						variant={"outline"}
						borderColor={theme === "light" ? "black" : "white"}
						onClick={onOpen}
					>
						Place Order
					</Button>
					<Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Enter OTP</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<FormControl isRequired>
									<FormLabel>Enter Pin</FormLabel>
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
							</ModalBody>
							<ModalFooter>
								<Button colorScheme="blue" mr={3} onClick={onClose}>
									Close
								</Button>
								<Button
									variant="ghost"
									onClick={() => {
										dispatch(checkout());
										<Navigate to="/" />;
									}}
								>
									Confirm Order
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Center>
			</Box>
		</div>
	);
};

export default Checkout;
