export default async function GetCards() {
    const res = await fetch("https://dynamic-events-api.onrender.com/api/eventos");

    if (!res.ok) {
        throw new Error(0)
    }

    const eventos = await res.json();

    console.log(eventos);
}