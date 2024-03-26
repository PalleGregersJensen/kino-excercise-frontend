import { useEffect } from "react";
import { getAllCinemas } from "../Rest-service/cinema";
import { useState } from "react";

export default function Cinema() {
    const [cinemaData, setCinemaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const cinemaData = await getAllCinemas();
            // console.log(cinemaData);
            setCinemaData(cinemaData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Oversigt over biografer</h1>
            <ul>
                {cinemaData.map((cinema) => (
                    <li key={cinema.id}>
                        <h2>Biografnavn: {cinema.name}</h2>
                        <p>
                            Antal sale i {cinema.name}: {cinema.numberOfTheaters} sale
                        </p>
                        <p>
                            Totalt antal pladser i {cinema.name}: {cinema.totalCapacity}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
