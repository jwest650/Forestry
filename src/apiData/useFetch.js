import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://forestrybackend.herokuapp.com/",
});

const useFetch = () => {
    const options = {
        method: "GET",
        url: "/api/form",
    };
    const { isLoading, error, data } = useQuery(["repoData"], async () => {
        const { data } = await axiosClient.request(options);
        return data;
    });
    return { data };
};

export default useFetch;
