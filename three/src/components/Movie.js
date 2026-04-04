import './Movie.css';

function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props;

    return (
        <div className="card">
            {
                Poster === 'N/A' || Poster === 'https://m.media-amazon.com/images/M/MV5BZGY1NmNlZDUtNDRkYy00YTE0LWJhZmQtMDU3ZGMwYzliYjAwXkEyXkFqcGdeQXVyMjU0MzI5MQ@@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BMThlNDc4MGUtMDM1NS00MTFjLTgzMzYtMGIwZDNhMWM3MGM5XkEyXkFqcGdeQXVyNzg5MTExNTQ@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BNWM3MDU2MWQtYjdlNC00NDBlLTkyNGMtNjdhYjdlNTdiNTFlXkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg' ? <img src={"https://picsum.photos/300/400/?blur"} alt={imdbID} />  : <img src={Poster} alt={imdbID} />
            }

            <div>
                <h3>{Title}</h3>
                <p>{Year} <span>{Type}</span></p>
            </div>
        </div>
    )
}

export default Movie;
