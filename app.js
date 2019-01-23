document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
});

let arr = [];
let arrMovies = [4154664,4154796,6565702];
let url = `http://www.omdbapi.com/?i=tt'+arrMovies+0'&apikey=c6c08c99`

console.log(url)


    for(arrMovies=0; arrMovies<=3; arrMovies++){
    fetch(url)
        .then(res => res.json())
        .then((out) => {

        if(out.Response === "True"){
            arrMovies.push(out);
        };
        printCards(arrMovies);
    })
    .catch(err => { throw err });
}

const printCards = (arrMovies) => {

    let mainDiv = document.getElementById("root");
    mainDiv.innerHTML = "";


    arrMovies.forEach(element => {

        mainDiv.innerHTML += `
        <div class="row">
        <div class="col s12 m7">
            <div class="card large">
            <div class="card-image">
                <img src="${element.Title}">
                <span class="card-title">${element.Plot}</span>
            </div>
            <div class="card-content">
                <p>Year:${element.Year}</p>
            </div>
            </div>
        </div>
        </div>
        `
    });

}
