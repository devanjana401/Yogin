document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-input");

    if (searchForm && searchInput) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();

            if (query === "class" || query === "classes") {
                window.location.href = "classes.html";
            } else if (query === "about") {
                window.location.href = "about.html";
            } else if (query === "contact") {
                window.location.href = "contact.html";
            } else if (query === "gallery") {
                window.location.href = "gallery.html";
            } else {
                alert("No results found for '" + query + "'");
            }
        });
    }
});