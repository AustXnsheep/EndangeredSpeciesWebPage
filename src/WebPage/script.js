const endangeredSpecies = [
    {
        name: "Sumatran Orangutan",
        description: "The Sumatran orangutan is a critically endangered species native to the island of Sumatra in Indonesia. It is known for its distinctive reddish-brown fur and long, powerful arms.",
        image: "Source/SumatranOrangutan.jpg"
    },
    {
        name: "Giant Panda",
        description: "The giant panda is a well-known endangered species native to China. It is characterized by its black and white coat and its preference for bamboo as its primary food source.",
        image: "Source/GiantPanda.jpg"
    },
    {
        name: "Black Rhino",
        description: "The Javan rhino is the closest to extinction with only between 46 to 66 individuals left, all of which are in Ujung Kulon National Park in Indonesia.",
        image: "Source/BlackRihno.jpg"
    },
];

function generateSpeciesInfo() {
    const speciesInfoContainer = document.getElementById("species-info");
    endangeredSpecies.forEach((species) => {
        const speciesElement = document.createElement("div");
        speciesElement.classList.add("species");

        const imageElement = document.createElement("img");
        imageElement.src = species.image;
        speciesElement.appendChild(imageElement);

        const nameElement = document.createElement("h2");
        nameElement.textContent = species.name;
        speciesElement.appendChild(nameElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = species.description;
        speciesElement.appendChild(descriptionElement);

        speciesInfoContainer.appendChild(speciesElement);
    });
}

window.onload = generateSpeciesInfo;