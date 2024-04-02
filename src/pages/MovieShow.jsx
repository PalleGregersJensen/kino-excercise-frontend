import { useEffect } from "react";
import { getAllMovieShows } from "../Rest-service/movieShows";
import { useState } from "react";

export default function MovieShow() {
    const [movieShows, setMovieShows] = useState([{}]);
    useEffect(() => {
        const fetchData = async () => {
            const movieShows = await getAllMovieShows();
            console.log(movieShows);
            setMovieShows(movieShows);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Movie Shows</h1>
            {movieShows.map((movieShow) => (
                <div key={movieShow.id}>
                    <h2>{movieShow.movie.title}</h2>
                    <p>{movieShow.movie.description}</p>
                    <p>{movieShow.startTimeStamp}</p>
                    <p>{movieShow.endTimeStamp}</p>
                    {/* <p>{movieShow.theater}</p> */}
                    {/* <p>{movieShow.cinema}</p> */}
                </div>
            ))}
        </div>
    );
}
