import { useEffect } from "react";
import { getAllTheaters } from "../Rest-service/theater";
import { useState } from "react";

export default function Theater() {
    const [theaterData, setTheaterData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const theaterData = await getAllTheaters();
            console.log(theaterData);
            setTheaterData(theaterData);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Oversigt over biografsale</h1>
            <ul>
                {theaterData.map((theater) => (
                    <li key={theater.id}>
                        <h2>Biografsals navn: {theater.name}</h2>
                        <p>
                            Antal rækker i {theater.name}: {theater.numberOfRows}
                        </p>
                        <p>
                            Totalt antal pladser i {theater.name}: {theater.totalNumberOfSeats}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
