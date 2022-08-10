document.addEventListener('DOMContentLoaded', API);

async function API() {
    const url = "db.json";
    const response = await fetch(url);
    const data = response.json();

    console.log(data);
}
