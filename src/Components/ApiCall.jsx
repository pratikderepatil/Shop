import axios from "axios";

export const getData = (search) => {
	return axios.get(`https://flipkart.dvishal485.workers.dev/search/${search}`);
};

export const getProduct = (search) => {
	return axios.get(`https://flipkart.dvishal485.workers.dev/product/${search}`);
};
