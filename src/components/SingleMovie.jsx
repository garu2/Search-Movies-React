import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SingleMovie = () => {
    const { id } = useParams();
    const {isLoading, error, data} = useFetch(`&i=${id}`);
    console.log("log: ", data);
    //const { Poster, Title, Plot, Year } = data;

    if (!isLoading) {
        return <p>loading</p>
    }


    return ( 
        !isLoading ?
        <div className="single-movie">
            <img src={data.Poster} alt={Title} />
            <div className="single-info">
                <h2>{ data.Title }</h2>
                <p>{ data.Plot }</p>
                <h4>{ data.Year }</h4>
            </div>
        </div>
        : ''
    );
}
 
export default SingleMovie;