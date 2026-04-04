import Movie from "./Movie";
import './MovieList.css';

function MovieList(props){
    const {movies = []} = props;

    return (
        <div className="flex">
            {
                movies.length ? movies.map((movie, index) => {
                    return <Movie key={index} {...movie} /> })
                    : <h4>Nothing found</h4>
            }
        </div>
    )
}

export default MovieList;
