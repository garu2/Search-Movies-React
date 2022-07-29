import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
    const { isLoading, data } = useContext(DataContext);

    return ( 
        <div className="movies-content">
            {
                !isLoading ?
                    data.map(item => (
                        <ItemMovie 
                        key={item.imdbID} 
                        id={item.imdbID} 
                        type={item.Type} 
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                        />
                    ))
                : ''
            }
        </div>
    );
}
 
export default Movies;