import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	Heading,
	Image,
	SimpleGrid,
	SkeletonCircle,
	SkeletonText,
	Stack,
	StackDivider,
	Table,
	Td,
	Text,
	Tr,
	VStack,
} from "@chakra-ui/react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Components/ApiCall";
import { addToCart } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContext";
import { Theme } from "../Context/ThemeContext";

const ProductDetails = () => {
	const { dispatch } = useContext(CartContext);

	const { details } = useParams();
	let query = details.split("_").join("/");
	const { theme } = useContext(Theme);
	const [loading, setLoading] = useState(false);

	const [data, setData] = useState([]);
	const [status, setStatus] = useState(false);
	useEffect(() => {
		setLoading(true);
		getProduct(query).then((res) => {
			setData(res.data);
			setStatus(true);
			setLoading(false);
		});
	}, [query]);

	if (loading) {
		return (
			<Box padding="6" boxShadow="lg" bg="white">
				<SkeletonCircle size="10" />
				<SkeletonText mt="4" noOfLines={4} spacing="4" />
			</Box>
		);
	}
	if (status) {
		return (
			<div className={theme === "light" ? "light" : "dark"}>
				<Container maxW={"7xl"}>
					<SimpleGrid
						columns={{ base: 1, lg: 1 }}
						spacing={{ base: 8, md: 10 }}
					>
						<Center>
							<Flex>
								<Image
									rounded={"md"}
									alt={"product image"}
									src={data.thumbnails[0]}
									fit={"cover"}
									align={"center"}
									h={"400px"}
								/>
							</Flex>
						</Center>
						<Stack spacing={{ base: 6, md: 10 }}>
							<Box as={"header"}>
								<Heading
									lineHeight={1.1}
									fontWeight={600}
									fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
								>
									{data.name}
								</Heading>
								<Text fontWeight={300} fontSize={"2xl"}>
									<Flex gap={4}>
										<Text style={{ textDecoration: "line-through" }}>
											Rs. {data.original_price}
										</Text>
										Rs. {data.current_price}
									</Flex>
								</Text>
							</Box>
							<Stack
								spacing={{ base: 4, sm: 6 }}
								direction={"column"}
								divider={<StackDivider borderColor={"gray.200"} />}
							>
								<VStack spacing={{ base: 4, sm: 6 }}>
									<Flex direction={"column"}>
										{data.highlights.map((ele) => {
											return (
												<Text fontSize={"lg"} key="ele">
													- {ele}.
												</Text>
											);
										})}
									</Flex>
								</VStack>
								<Accordion allowToggle>
									{data.specs.map((ele, i) => {
										return (
											<AccordionItem key={i}>
												<AccordionButton>
													<Box flex="1" textAlign="left">
														{ele.title}
													</Box>
													<AccordionIcon />
												</AccordionButton>
												<AccordionPanel pb={4}>
													<Table>
														{ele.details.map((elem, j) => {
															return (
																<Tr key={j}>
																	<Td>{elem.property}</Td>
																	<Td>{elem.value}</Td>
																</Tr>
															);
														})}
													</Table>
												</AccordionPanel>
											</AccordionItem>
										);
									})}
								</Accordion>
							</Stack>
							<Button
								rounded={"none"}
								w={"full"}
								mt={8}
								size={"lg"}
								py={"7"}
								bg={"gray.600"}
								color={"gray.50"}
								textTransform={"uppercase"}
								_hover={{
									transform: "translateY(2px)",
									boxShadow: "lg",
								}}
								onClick={() => dispatch(addToCart(data))}
							>
								Add to cart
							</Button>
						</Stack>
					</SimpleGrid>
				</Container>
			</div>
		);
	}
};

export default ProductDetails;
