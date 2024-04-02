import { useEffect } from "react";
import { useState } from "react";
import { getAllMovies } from "../Rest-service/movies";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [movieData, setMovieData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const movieData = await getAllMovies();
            // console.log(cinemaData);
            setMovieData(movieData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>Velkommen til vores hjemmeside</p>
            <p>Vælg hvilken film, du vil reservere tid til</p>
            {movieData.map((movie) => (
                <>
                    <div key={movie.id}>
                        <p>{movie.title}</p>
                        <p>{movie.description}</p>
                        <button onClick = {() => navigate("/movieshow")}>Vælg billetter til {movie.title}</button>
                    </div>
                </>
            ))}
        </div>
    );
}
