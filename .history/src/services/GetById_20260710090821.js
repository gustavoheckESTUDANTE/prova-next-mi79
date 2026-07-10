export default async function GetCards(id) {
    const res = await fetch("https://dynamic-events-api.onrender.com/api/eventos/${}");

    if (!res.ok) {
        throw new Error("Error trying to get the cards")
    }

    const evento = await res.json();

    return evento
}