import { Box, Center, Flex, Grid, Image, Tooltip } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../Components/ApiCall";
import { Theme } from "../Context/ThemeContext";

const Products = () => {
	const { prod } = useParams();
	const [data, setData] = useState([]);
	const { theme } = useContext(Theme);

	useEffect(() => {
		getData(prod).then((res) => {
			setData(res.data.result);
		});
	}, [prod]);
	return (
		<div className={theme === "light" ? "light" : "dark"}>
			<Grid
				templateColumns={{
					lg: "repeat(3,1fr)",
					md: "repeat(2,1fr)",
					sm: "repeat(1,1fr)",
				}}
				gap={[0, 2, 4]}
			>
				{data?.map((ele, i) => {
					let query = ele.query_url;
					query = query.split("/");
					return (
						<Link
							to={`/product/productDetails/${query[4]}_${query[5]}_${query[6]}`}
							key={i}
						>
							<Flex w="full" alignItems="center" justifyContent="center" p={4}>
								<Box maxW="sm" borderWidth="1px" rounded="lg" shadow="lg">
									<Center>
										<Image
											src={ele.thumbnail}
											alt={`Picture of ${ele.name}`}
											roundedTop="lg"
											h={200}
										/>
									</Center>

									<Box p="6">
										<Flex
											mt="1"
											justifyContent="space-between"
											alignContent="center"
										>
											<Box
												fontSize="md"
												fontWeight="semibold"
												as="h4"
												lineHeight="tight"
											>
												{ele.name}
											</Box>
										</Flex>

										<Flex justifyContent="space-between" alignContent="center">
											<Box fontSize="2xl">
												<Box as="span" fontSize="lg">
													Rs.
												</Box>
												{ele.original_price}
											</Box>
											<Box fontSize="2xl">
												<Box as="span" fontSize="lg">
													Rs.
												</Box>
												{ele.current_price}
											</Box>
											<Center>
												<Tooltip
													label="Add to cart"
													bg="white"
													color={"gray.800"}
													fontSize={"1.2em"}
												>
													<ion-icon name="cart-sharp"></ion-icon>
												</Tooltip>
											</Center>
										</Flex>
									</Box>
								</Box>
							</Flex>
						</Link>
					);
				})}
			</Grid>
		</div>
	);
};

export default Products;
