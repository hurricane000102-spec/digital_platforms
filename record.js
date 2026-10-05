const params = new URLSearchParams(window.location.search);

const recordNumber = params.get("record");


fetch("records.json")
    .then(response => response.json())
    .then(records => {

        const record = records[recordNumber];


        if (!record) {

            document.querySelector("main").innerHTML =
                "<p>Record not found.</p>";

            return;
        }


        document.title = `${record.name} — Low Yo Yo Stuff`;


        document.querySelector("#record-name").textContent =
            record.name;

        document.querySelector("#record-artist").textContent =
            record.artist;

        document.querySelector("#record-year").textContent =
            record.year;

        document.querySelector("#record-genre").textContent =
            record.genre;

        document.querySelector("#record-price").textContent =
            record.price;


        const image = document.querySelector("#record-image");

        image.src = `images/${record.image}`;

        image.alt = `${record.name} album cover`;

    })
    .catch(error => {

        console.error("Error loading record:", error);

    });