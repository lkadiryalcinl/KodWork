import axios from "axios";
import { useEffect, useState} from "react";

export default(url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (err) {
            setError(err.message)
            console.log(err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { data,loading,error}
}