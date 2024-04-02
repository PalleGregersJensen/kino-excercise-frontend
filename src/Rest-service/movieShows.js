import { endpoint } from "./cinema";

async function getAllMovieShows() {
    const response = await fetch(`${endpoint}/movieshow`);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getAllMovieShows };
