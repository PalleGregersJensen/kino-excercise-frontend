import { endpoint } from "./cinema.js";

async function getAllTheaters() {
    const response = await fetch(`${endpoint}/theater`);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getAllTheaters };