document.addEventListener('DOMContentLoaded', () => {
    alert('hola')
});

async function API() {
    try {
        const url = "db.json";
        const respuesta = await fetch(url);
        const data = await respuesta.json();

    } catch (error) {
        console.log(error);
    }
    
}

