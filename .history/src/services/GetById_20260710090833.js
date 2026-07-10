export default async function GetCards(id) {
    const res = await fetchid(`https://dynamic-events-api.onrender.com/api/eventos/${id}`);

    if (!res.ok) {
        throw new Error("Error trying to get the card by ")
    }

    const evento = await res.json();

    return evento
}