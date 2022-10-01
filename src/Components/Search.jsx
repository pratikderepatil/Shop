import {
	Button,
	Divider,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
	const [search, setSearch] = useState("");
	return (
		<div>
			<InputGroup size="md">
				<Input
					pr="4.5rem"
					borderColor="gray.400"
					borderRadius={20}
					placeholder="Search"
					name="search"
					w={["15rem", "20rem", "20rem", "30rem"]}
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				<InputRightElement>
					<Divider orientation="vertical" h="60%" />
					<Link to={`/product/${search}`}>
						<Button variant={"unstyled"}>
							<ion-icon name="search" />
						</Button>
					</Link>
				</InputRightElement>
			</InputGroup>
		</div>
	);
};

export default Search;
