function showLink() {
    const wojewodztwo = document.getElementById("wojewodztwo").value;
    const result = document.getElementById("result");
    

    const links = {
        "dolnoslaskie": "https://www.mindat.org/loc-211010.html",
        "kujawsko-pomorskie": "https://www.mindat.org/loc-132692.html",
        "lubelskie": "https://www.mindat.org/loc-8578.html",
        "lubuskie": "https://www.mindat.org/loc-18870.html",
        "lodzkie": "https://www.mindat.org/loc-237494.html",
        "malopolskie": "https://www.mindat.org/loc-155722.html",
        "mazowieckie": "https://www.mindat.org/loc-157320.html",
        "opolskie": "https://www.mindat.org/loc-246643.html",
        "podkarpackie": "https://www.mindat.org/loc-247643.html",
        "podlaskie": "https://www.mindat.org/loc-205414.html",
        "pomorskie": "https://www.mindat.org/loc-268205.html",
        "slaskie": "https://www.mindat.org/loc-209802.html",
        "swietokrzyskie": "https://www.mindat.org/loc-220870.html",
        "warminsko-mazurskie": "https://www.mindat.org/loc-217888.html",
        "wielkopolskie": "https://www.mindat.org/loc-264914.html",
        "zachodniopomorskie": "https://www.mindat.org/loc-268205.html"
    };
    
    
    if (wojewodztwo) {
        const link = links[wojewodztwo];
        result.innerHTML = `Odwiedź stronę: <a href="${link}" target="_blank">${link}</a>`;
    } else {
        result.innerHTML = "Wybierz województwo, aby zobaczyć link.";
    }
}

function updateClock() {
    const now = new Date(); // Pobieramy aktualny czas
    let hours = now.getHours(); // Godzina
    let minutes = now.getMinutes(); // Minuty
    let seconds = now.getSeconds(); // Sekundy

    // Dodajemy zerowanie, jeśli godziny, minuty lub sekundy są mniejsze niż 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Łączymy godzinę, minutę i sekundę w odpowiedni format
    const timeString = hours + ':' + minutes + ':' + seconds;

    // Wyświetlamy wynik w elemencie o id "clock"
    document.getElementById('clock').textContent = timeString;
}

// Aktualizowanie zegara co 1000 ms (1 sekunda)
setInterval(updateClock, 1000);

// Uruchamiamy zegar natychmiast po załadowaniu strony
updateClock();