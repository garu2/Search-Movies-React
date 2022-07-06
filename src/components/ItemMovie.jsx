
import DefaultImage from "/NoImage.png"
import { Link } from "react-router-dom";

const ItemMovie = ({ id, title, type, year, poster }) => {
    // console.log('poster:',poster  );
    
    let image = poster === "N/A" ? DefaultImage : poster;

    return ( 
        <Link to={`/movies/${id}`}>
            <div className="item-movie" style={{ backgroundImage: `url(${image})` }}>
                <div className="info">
                    <h4>{title}</h4>
                    <p className="row-info"><span>{type}</span><span>{year}</span></p>
                </div>
            </div>
        </Link>
    );
}
 
export default ItemMovie;