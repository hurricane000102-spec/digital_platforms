let records = [];

const recordGrid = document.querySelector("#record-grid");
const genreFilter = document.querySelector("#genre-filter");


fetch("records.json")
    .then(response => response.json())
    .then(data => {

        records = data;

        displayRecords(records);

    });


function displayRecords(recordsToDisplay) {

    recordGrid.innerHTML = "";

    recordsToDisplay.forEach(record => {

        const article = document.createElement("article");

        article.classList.add("record");

        const originalIndex = records.indexOf(record);

        article.innerHTML = `
            <figure>

                <a href="record.html?record=${originalIndex}">

                    <img
                        src="images/${record.image}"
                        alt="${record.name} album cover"
                    >

                </a>

                <figcaption>

                    <h3>${record.name}</h3>

                    <p>${record.artist}</p>

                    <p>${record.price}</p>

                </figcaption>

            </figure>
        `;

        recordGrid.appendChild(article);

    });

}


genreFilter.addEventListener("change", function () {

    const selectedGenre = genreFilter.value;


    if (selectedGenre === "all") {

        displayRecords(records);

        return;

    }


    const filteredRecords = records.filter(record =>
        record.genre.includes(selectedGenre)
    );


    displayRecords(filteredRecords);

});