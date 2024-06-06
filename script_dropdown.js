document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        { title: "Film 1", category: "thriller" },
        { title: "Film 2", category: "romance" },
        { title: "Film 3", category: "science-fiction" },
        { title: "Film 4", category: "drama" },
        // Add more movies here
    ];

    const categorySelect = document.getElementById("category-select");
    const movieList = document.getElementById("movie-list");

    function renderMovies(category) {
        // Clear existing movie list
        movieList.innerHTML = "";

        // Filter movies based on category
        const filteredMovies = category === "all" ? movies : movies.filter(movie => movie.category === category);

        // Render movies
        filteredMovies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.textContent = movie.title;
            movieList.appendChild(movieElement);
        });
    }

    // Initial render
    renderMovies("all");

    // Event listener for category selection change
    categorySelect.addEventListener("change", function() {
        renderMovies(this.value);
    });
});