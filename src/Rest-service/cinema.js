const endpoint = 'http://localhost:5000/api'

async function getAllCinemas() {
    const response = await fetch(`${endpoint}/cinema`);
    const data = await response.json();
    console.log(data);
    return data;
}


export { getAllCinemas };