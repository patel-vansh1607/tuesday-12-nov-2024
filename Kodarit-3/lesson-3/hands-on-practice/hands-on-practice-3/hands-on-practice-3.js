const movies =  [
    { title: "Forrest Gump", director: "Robert Zemeckis", yearReleased: 1994 },
    { title: "The Dark Knight", director: "Christopher Nolan", yearReleased: 2008 },
    { title: "Jurassic Park", director: "Steven Spielberg", yearReleased: 1993 },
    { title: "Inception", director: "Christopher Nolan", yearReleased: 2010 },
    { title: "The Matrix", director: "The Wachowskis", yearReleased: 1999 },
    { title: "Titanic", director: "James Cameron", yearReleased: 1997 },
    { title: "Avatar", director: "James Cameron", yearReleased: 2009 },
    { title: "Gladiator", director: "Ridley Scott", yearReleased: 2000 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", yearReleased: 1994 },
    { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", yearReleased: 2003 }

]


function moviesAfter2000(movies){
    movies.forEach(movies>= {
        if (yearReleased >= 2000) {
            console.log(title);
    }
    });
}
moviesAfter2000(title)