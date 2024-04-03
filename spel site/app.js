// toonFoto(): Toont een afbeelding van Microsoft Teams in het display-gebied.
function toonFoto() {
    document.getElementById('display-gebied').innerHTML = '<img src="./img/MicrosoftTeams-image.png" alt="Microsoft Teams">';
}

// toonContact(): Toont contactinformatie in het display-gebied.
function toonContact() {
    document.getElementById('display-gebied').innerHTML = `
        <div class="contact-info">
            <p class="info-item">Naam: Zanyar Bero Hesso</p>
            <p class="info-item">Email: zanyar.doe@example.com</p>
            <p class="info-item">Telefoon: +123456789</p>
            <p class="info-item">Adres: 123 Main Street, Cityville</p>
        </div>
    `;
}

// toonPitch(): Toont een video in het display-gebied met een fallback-tekst als de browser de video niet ondersteunt.
function toonPitch() {
    var displayArea = document.getElementById('display-gebied');
    displayArea.innerHTML = '<video width="30%" height="200" controls><source src="./img/Video2.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
}

// toonProjecten(): Toont informatie over het project "Ouderavond" in het display-gebied.
function toonProjecten() {
    document.getElementById('display-gebied').innerHTML = '<p>We hadden een project genaamd "Ouderavond". We moesten een website maken. Nu moeten we een website maken met 3 personen, en elke persoon moet een game ontwikkelen</p>';
}

// toonVaardigheden(): Toont een lijst van vaardigheden in het display-gebied.
function toonVaardigheden() {
    var vaardigheden = '<ul>' +
                        '<li>Programmeertalen: Java, Python, JavaScript</li>' +
                        '<li>Webontwikkeling: HTML, CSS, React, Angular</li>' +
                        '<li>Databasebeheer: MySQL, MongoDB</li>' +
                        '<li>Versiebeheer: Git</li>' +
                        '<li>Software-architectuur: MVC, RESTful API</li>' +
                        '<li>Testen: Unit testing, Integration testing</li>' +
                        '<li>Probleemoplossing en debugging</li>' +
                        '<li>Agile ontwikkelmethodologie</li>' +
                        '<li>Software-ontwerp en -patronen</li>' +
                        '<li>Kennis van frameworks: Spring, Django</li>' +
                        '<li>Samenwerking en communicatie binnen een team</li>' +
                      '</ul>';

    document.getElementById('display-gebied').innerHTML = '<p>Jouw vaardigheden:</p>' + vaardigheden;
}

// toonErvaring(): Toont ervaring als student softwareontwikkelaar in het display-gebied.
function toonErvaring() {
    var ervaring = "<h2>Ervaring als Student Software Developer</h2>";

    ervaring += "<h3>Stage bij XYZ Bedrijf</h3>";
    ervaring += "<p>Tijdens mijn stage bij XYZ Bedrijf heb ik intensief samengewerkt aan het ontwikkelen van een webapplicatie voor klanten. Mijn taken omvatten het schrijven van code, debuggen en het implementeren van nieuwe functies.</p>";

    ervaring += "<h3>Project: Online Winkelplatform</h3>";
    ervaring += "<p>Als onderdeel van mijn studie heb ik deelgenomen aan een teamproject waar we een online winkelplatform hebben gebouwd. Mijn rol was gericht op het ontwerpen van de gebruikersinterface en het implementeren van de winkelwagenfunctionaliteit.</p>";

    ervaring += "<h3>Programmeertalen en Technologieën</h3>";
    ervaring += "<ul>";
    ervaring += "<li>Ervaring met JavaScript, HTML en CSS voor front-end ontwikkeling.</li>";
    ervaring += "<li>Bekendheid met back-end technologieën zoals Node.js en Express.</li>";
    ervaring += "<li>Database-ervaring met SQL en MongoDB.</li>";
    ervaring += "<li>Gebruik van Git voor versiebeheer en samenwerking.</li>";
    ervaring += "</ul>";

    document.getElementById('display-gebied').innerHTML = ervaring;
}
