export default asyncfunction GetCards() {

    const res = await fetch("https://dynamic-events-api.onrender.com/api/eventos");
    const eventos = await res.json();
    console.log(eventos);
}