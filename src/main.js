document.addEventListener('DOMContentLoaded', function () {
    window.M.AutoInit();
});

let arr = [];
let btnHarryPotter = document.getElementById("harryPotter");
let btnStarWars = document.getElementById("starWars");
let btnMarvel = document.getElementById("marvel");
let btnLotr = document.getElementById("lotr");
let webDetails = document.getElementById("web-details");
let universeDetails = document.getElementById("universe-details");
let movieDetails = document.getElementById("movie-details");
let close = document.getElementById("close");
let instructionSlide = document.getElementById("instruction-slide");
let homePage = document.getElementById("homePage");

window.onload = () => {
    homePage.style.display = "none";
}

close.onclick = () => {
    instructionSlide.style.display = "none";
    homePage.style.display = "block";
}

btnHarryPotter.addEventListener("click", () => {
    homePage.style.display = "none";
    const movie = ["0241527", "0295297", "0304141", "0330373", "0373889", "0417741", "0926084", "1201607", "3183660", "4123430"]
    printMovies(movie);
});

btnStarWars.addEventListener("click", () => {
    homePage.style.display = "none";
    const movie = ["0076759", "0080684", "0086190", "0120915", "0121765", "0121766", "2488496", "2527336", "3748528", "3778644"]
    printMovies(movie);
});

btnMarvel.addEventListener("click", () => {
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/VeronicaManchola/Hackaton-Final-CC/master/UX/Prototipo%20de%20alta%20fidelidad/Poster%20Pel%C3%ADculas/Marvel.jpg')";
    homePage.style.display = "none";
    const movie = ["0371746", "0800080", "1228705", "0800369", "0458339", "0848228", "1300854", "1981115", "1843866", "2015381", "2395427", "0478970", "3498820", "1211837", "3896198", "2250912", "3501632", "1825683", "4154756", "5095030"]
    printMovies(movie);
});

btnLotr.addEventListener("click", () => {
    homePage.style.display = "none";
    const movie = ["0120737", "0167261", "0167260", "0903624", "1170358", "2310332"]
    printMovies(movie);
});

const printMovies = (movie) => {

    for (i = 0; i < movie.length; i++) {

        arr = [];
        let url = `http://www.omdbapi.com/?i=tt${movie[i]}&apikey=b9ccb762`

        fetch(url)
            .then(res => res.json())
            .then((out) => {
                if (out.Response === "True") {
                    arr.push(out);
                };
                printCards(arr);
            })
            .catch(err => { throw err });
    }

    const printCards = (arr) => {

        universeDetails.innerHTML = "";

        const sort = window.sort.older(arr);

        sort.forEach(element => {

            universeDetails.innerHTML += `
            <div class="col s6 m4 l3">
                <div class="btnCard card medium"" id="infobtn${element.imdbID}">
                    <img class="responsive-img" src="${element.Poster}">
                </div>
            </div>
            `
        });

        sort.forEach(element => {
            let detailsBtn = document.getElementById("infobtn" + element.imdbID)

            detailsBtn.onclick = () => {
                console.log("click");
                webDetails.style.display = "none";
                universeDetails.style.display = "none"

                movieDetails.innerHTML += `
                <div class="col s5 m4 l3">
                    <div class="card medium">
                        <div class="card-image">
                            <img src="${element.Poster}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${element.Title}</span>
                            <ul>
                                <li>Year: ${element.Year}</li>
                                <li>Plot: ${element.Plot}</li>
                                <li>Director: ${element.Director}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            }
        });
    }
}
