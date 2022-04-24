import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setData(null);
        setErrorMsg(null);
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
                setIsLoading(false);
            } catch (error) {
                setErrorMsg(error.response.data.message);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, errorMsg };
};

export default useFetch;
