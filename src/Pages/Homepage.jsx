import {
	Box,
	Container,
	Grid,
	Heading,
	Image,
	Stack,
	StackDivider,
	Text,
	VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../Context/ThemeContext";

const Homepage = () => {
	const { theme } = useContext(Theme);
	const brands = [
		{
			name: "Nike",
			image: "https://img.shop.com/Image/homepage/nike_140x110-img.gif",
		},
		{
			name: "Michaelkors",
			image: "https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif",
		},
		{
			name: "Coach",
			image: "https://img.shop.com/Image/homepage/coach_brand7.jpg",
		},
		{
			name: "Adidas",
			image: "https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg",
		},
		{
			name: "Shark Ninja",
			image:
				"https://img.shop.com/Image/homepage/shark-ninja-logo1660227901172.jpg",
		},
	];
	const musthave = [
		{
			name: "Women's Sweaters",
			image:
				"https://img.shop.com/Image/260000/266700/266794/products/1920610566.jpg",
		},
		{
			name: "Scarves",
			image:
				"https://img.shop.com/Image/270000/278200/278200/products/1893109510.jpg",
		},
		{
			name: "Women's Jeans",
			image:
				"https://img.shop.com/Image/260000/266700/266794/products/1920629638.jpg",
		},
		{
			name: "Women's Boots",
			image:
				"https://img.shop.com/Image/280000/289600/289605/products/1946502092.jpg",
		},
		{
			name: "Bags & Totes",
			image:
				"https://img.shop.com/Image/260000/266700/266794/products/1940554751.jpg",
		},
		{
			name: "Pumpkin Spice",
			image:
				"https://img.shop.com/Image/250000/251800/251872/products/1927616009.jpg",
		},
	];
	const cashback = [
		{
			name: "Lumière de Vie® Hydrate 3.0.",
			image:
				"https://img.shop.com/Image/homepage/LDV-SHOP-usa-eng-102612-hydrate-3.0-banner-media1660240995106.jpg",
		},
		{
			name: "Lumière de Vie® The Elixir.",
			image:
				"https://img.shop.com/Image/homepage/ldv-usa-102616-elixir-media1660241109060.jpg",
		},
		{
			name: "Motives x",
			image:
				"https://img.shop.com/Image/homepage/motives-usa-can-101580-lala-palette-banner-media-min1660241284590.jpg",
		},
		{
			name: "Motives Lip Collection",
			image:
				"https://img.shop.com/Image/homepage/motives-usa-can-102620-30th-anniv-lip-banner-media-min1660241408665.jpg",
		},
	];
	return (
		<div className={theme === "light" ? "light" : "dark"}>
			<Container maxW={"7xl"}>
				<Stack
					spacing={{ base: 4, sm: 6 }}
					direction={"column"}
					divider={<StackDivider borderColor={"gray.200"} />}
				>
					<VStack spacing={{ base: 4, sm: 6 }}>
						<Heading>Popular Brands</Heading>
						<Grid
							templateColumns={{
								lg: "repeat(5,4fr)",
								md: "repeat(5,1fr)",
								sm: "repeat(2,1fr)",
							}}
							gap={[0, 2, 4]}
							w="full"
						>
							{brands.map((ele) => {
								return (
									<Link to={`/product/${ele.name}`} key={ele.name}>
										<VStack>
											<Image src={ele.image} alt={ele.name} />
											<Text>{ele.name}</Text>
										</VStack>
									</Link>
								);
							})}
						</Grid>
					</VStack>
					<VStack spacing={{ base: 4, sm: 6 }}>
						<Heading>Fall Must-Haves</Heading>
						<Grid
							templateColumns={{
								lg: "repeat(6,4fr)",
								md: "repeat(3,1fr)",
								sm: "repeat(3,1fr)",
							}}
							gap={[0, 2, 4]}
							w="full"
						>
							{musthave.map((ele) => {
								return (
									<Link to={`/product/${ele.name}`} key={ele.name}>
										<VStack>
											<Box
												maxW={"270px"}
												w={"full"}
												bg={"transparent"}
												boxShadow={"2xl"}
												rounded={"50%"}
												overflow={"hidden"}
												align={"center"}
												borderWidth={10}
											>
												<Image src={ele.image} alt={ele.name} h="200px" />
											</Box>
											<Text>{ele.name}</Text>
										</VStack>
									</Link>
								);
							})}
						</Grid>
					</VStack>
					<VStack spacing={{ base: 4, sm: 6 }}>
						<Grid
							templateColumns={{
								lg: "repeat(4,4fr)",
								md: "repeat(2,1fr)",
								sm: "repeat(2,1fr)",
							}}
							gap={[0, 2, 4]}
							w="full"
						>
							{cashback.map((ele) => {
								return (
									<Link to={`/product/${ele.name}`} key={ele.name}>
										<VStack>
											<Box
												maxW={"240px"}
												w={"full"}
												bg={"transparent"}
												boxShadow={"2xl"}
												rounded={"lg"}
												overflow={"hidden"}
												align={"center"}
												borderWidth={2}
											>
												<Image src={ele.image} alt={ele.name} h="200px" />
											</Box>
										</VStack>
									</Link>
								);
							})}
						</Grid>
					</VStack>
				</Stack>
			</Container>
		</div>
	);
};

export default Homepage;
