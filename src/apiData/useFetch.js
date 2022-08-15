import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const axiosClient = axios.create({
    BaseURL: "forestrybackend.herokuapp.com/",
     timeout: 1000,

})
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
