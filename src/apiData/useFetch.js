import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetch = () => {
    const options = {
        method: "GET",
        url: "/api/form",
    };
    const { isLoading, error, data } = useQuery(["repoData"], async () => {
        const { data } = await axios.request(options);
        return data;
    });
    return { data };
};

export default useFetch;
