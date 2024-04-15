import { useEffect, useState } from "react";


const useFetchedData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('../Estates.json')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, []);

    return { data }
};

export default useFetchedData;