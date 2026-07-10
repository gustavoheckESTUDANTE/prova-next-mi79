export default async function GetCards() {
    const res = await fetch("https://dynamic-events-api.onrender.com/api/eventos");

    if (res.ok) {
        
    }

    const eventos = await res.json();

    console.log(eventos);
}