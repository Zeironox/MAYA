const data = [
    { img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Christopher_Columbus3.jpg", title: "Contesto storico", text: "Alla fine del XV secolo, l’Europa cercava nuove rotte commerciali verso l’Asia..." },
    { img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Voyages_of_Columbus.png", title: "Il viaggio del 1492", text: "Colombo partì con tre navi (Niña, Pinta, Santa Maria) e il 12 ottobre 1492 sbarcò nei Caraibi..." },
    { img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mexican_Codex_Tovar.jpg", title: "Conseguenze", text: "A breve termine: colonizzazione, malattie portate dagli europei, sfruttamento degli indigeni..." },
    { img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mayan_Numerals.svg", title: "Matematica e astronomia Maya", text: "I Maya sono noti per i loro avanzamenti in matematica, astronomia e architettura..." },
    { img: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Chichen_Itza_3.jpg", title: "Città Maya", text: "Le città Maya, come Tikal e Chichén Itzá, erano vere e proprie meraviglie architettoniche..." },
    { img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Tikal_Temple_1_2006_08_11.JPG", title: "La caduta della civiltà Maya", text: "La caduta della civiltà Maya è un mistero che ancora oggi affascina gli studiosi..." }
];

const container = document.getElementById("content");

data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <button onclick="alert('${item.title}')">Scopri di più</button>
    `;
    container.appendChild(card);
});
