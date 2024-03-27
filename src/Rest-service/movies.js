import { endpoint } from "./cinema";

async function getAllMovies() {
    const response = await fetch(`${endpoint}/movies`);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getAllMovies };