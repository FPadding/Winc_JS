const filterButtons = document.querySelectorAll("nav label")
const movieList = document.getElementById("movielist");
const filterWords = ["Avengers", "X-Men", "Princess", "Batman"]

//voegt alle films en series in een gegeven lijst toe aan de DOM
const addMoviesToDom = (list) => {
    list.forEach(movie => {
        newItem = document.createElement("li");
        newLink = document.createElement("a");
        newImage = document.createElement("img");
        movieList.appendChild(newItem);
        newItem.appendChild(newLink);
        newLink.appendChild(newImage);
        newImage.src = movie.poster;
        newLink.href = "https://www.imdb.com/title/" + movie.imdbID;
    })
}

//filtert de lijst 'movies' op basis van een index.
const filterMovies = (index) => {
    if (index === 0) {
        filteredMovies = movies;
    }
    if (index === 1) {
        filteredMovies = movies.filter(movie => {
            return parseInt(movie.year) >= 2014;
        })
    }
    if (index >= 2) {
        filteredMovies = movies.filter(movie => {
            return movie.title.includes(filterWords[index - 2]);
        });
    }
    addMoviesToDom(filteredMovies);
}

//Leegt de ul met alle films
const removeMovies = () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild)
    }
};

//event voor alle filterknoppen
filterButtons.forEach((button, index) => {
    button.addEventListener("change", () => {
        removeMovies();
        filterMovies(index);
    });
});

//Geeft de ongefilterde lijst weer op de pagina na het laden ervan.
addMoviesToDom(movies);