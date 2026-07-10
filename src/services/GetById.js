export default async function GetById(id) {
    const res = await fetch(`https://dynamic-events-api.onrender.com/api/eventos/${id}`);

    if (!res.ok) {
        throw new Error("Error trying to get the card by id")
    }

    const evento = await res.json();

    return evento
}