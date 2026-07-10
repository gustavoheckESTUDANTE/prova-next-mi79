export default async function GetCards() {
    const res = await fetch("https://dynamic-events-api.onrender.com/api/eventos?categoria=Workshops");

    if (!res.ok) {
        throw new Error("Error trying to get the cards")
    }

    const eventos = await res.json();

    return eventos
}