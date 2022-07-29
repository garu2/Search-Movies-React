import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import DefaultImage from "/NoImage.png"

const SingleMovie = () => {
    const { id } = useParams();
    const {isLoading, error, data} = useFetch(`&i=${id}`);
    
    if (isLoading) {
        return <div className="loading"></div>
    }

    const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
    let image = Poster === "N/A" ? DefaultImage : Poster;

    return ( 
        !isLoading ?
        <div className="single-movie">
            <img src={image} alt={Title} />
            <div className="single-info">
                <h2>{ Title }</h2>
                <p> { Plot }</p>
                <p><strong>Country: </strong>{ Country }</p>
                <p><strong>Director: </strong>{ Director }</p>
                <p><strong>Released: </strong>{ Released }</p>
                <p><strong>Runtime: </strong>{ Runtime }</p>
                <p><strong>Year: </strong>{ Year }</p>
            </div>
        </div>
        : ''
    );
}
 
export default SingleMovie;