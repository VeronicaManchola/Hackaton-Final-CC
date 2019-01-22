document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
});

let arr = [];

for(i=1; i<=9; i++){
    let url = `http://www.omdbapi.com/?i=tt000000${i}&apikey=c6c08c99`

    fetch(url)
    .then(res => res.json())
    .then((out) => {

        if(out.Response === "True"){
            arr.push(out);
        };
        printCards(arr);
    })
    .catch(err => { throw err });
}

const printCards = (arr) => {

    let mainDiv = document.getElementById("root");
    mainDiv.innerHTML = "";


    arr.forEach(element => {

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
