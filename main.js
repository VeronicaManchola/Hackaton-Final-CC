document.addEventListener('DOMContentLoaded', function () {
    window.M.AutoInit();
});

let arr = [];
let btnHarryPotter = document.getElementById("harryPotter");
let btnStarWars = document.getElementById("starWars");
let btnMarvel = document.getElementById("marvel");

btnHarryPotter.addEventListener("click", () => {
    const movie = ["0241527", "0295297", "0304141", "0330373", "0373889", "0417741", "0926084", "1201607", "3183660", "4123430"]
    printMovies(movie);
});

btnStarWars.addEventListener("click", () => {
    const movie = ["0076759", "0080684", "0086190", "0120915", "0121765", "0121766", "2488496", "2527336", "3748528", "3778644"]
    printMovies(movie);
});
btnMarvel.addEventListener("click", () => {
    const movie = ["0371746", "0800080", "1228705", "0800369", "0458339", "0848228", "1300854", "1981115", "1843866", "2015381", "2395427", "0478970", "3498820", "1211837", "3896198", "2250912", "3501632", "1825683", "4154756", "5095030"]
    printMovies(movie);
});

const printMovies = (movie) =>{

    for (i = 0; i < 20; i++) {

        
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
console.log(printMovies)
    const printCards = (arr) => {

        let mainDiv = document.getElementById("root");
        mainDiv.innerHTML = "";

        const sort = window.sort.older(arr);

        sort.forEach(element => {

            mainDiv.innerHTML += `
        <div class="row">
        <div class="col s12 m7">
            <div class="card large">
            <div class="card-image">
                <img src="${element.Poster}">
                <span class="card-title">${element.Title}</span>
            </div>
            <div class="card-content">
                <p>Year:${element.Year}. Plot: ${element.Plot}</p>
            </div>
            </div>
        </div>
        </div>
        `
        });
    }
}
