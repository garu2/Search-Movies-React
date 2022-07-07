import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_MOVIE_API_KEY}`;

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchMovie = (url) => {
        setIsLoading(true);
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                if (respuestaJson.Response === "True") {
                    //console.log("res: ", respuestaJson);
                    setData(respuestaJson.Search || respuestaJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(error => {console.log(error);})
    }
    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);
        console.log('url: ',`${API_ENDPOINT}${params}`);
    }, [params])

    return {isLoading, error, data}
}