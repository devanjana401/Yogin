// document.addEventListener("DOMContentLoaded", function () {
//     const searchForm = document.querySelector(".search-form");
//     const searchInput = document.querySelector(".search-input");

//     if (searchForm && searchInput) {
//         searchForm.addEventListener("submit", function (e) {
//             e.preventDefault();
//             const query = searchInput.value.trim().toLowerCase();

//             if (query === "class" || query === "classes") {
//                 window.location.href = "classes.html";
//             } else if (query === "about") {
//                 window.location.href = "about.html";
//             } else if (query === "contact") {
//                 window.location.href = "contact.html";
//             } else if (query === "gallery") {
//                 window.location.href = "gallery.html";
//             } else {
//                 alert("No results found for '" + query + "'");
//             }
//         });
//     }
// });




document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.querySelector(".search-form");
    const searchInput = document.querySelector(".search-input");
    const suggestionBox = document.querySelector(".search-suggestions");

    const pages = [
        { name: "about", url: "about.html" },
        { name: "classes", url: "classes.html" },
        { name: "gallery", url: "gallery.html" },
        { name: "faq", url: "faq.html" },
        { name: "contact", url: "contact.html" },
        

        //  { name: "power yoga", url: "classes.html#power" },
        // { name: "yoga for pregnant", url: "classes.html#pregnant" },
        // { name: "yoga for beginners", url: "classes.html#beginners" },
        // { name: "meditation & mindfulness", url: "classes.html#meditation" },
        // { name: "flexibility & balance yoga", url: "classes.html#flexibility" },
        // { name: "group lessons", url: "classes.html#group" }
    ];

    // creating an element classnamed as "suggest-item"
    pages.forEach(page => {
        const item = document.createElement("div");
        item.classList.add("suggest-item");
        item.innerText = page.name;
        suggestionBox.appendChild(item);
    });

    // showing that suggestions
    searchInput.addEventListener("focus", () => {
        suggestionBox.style.display = "block";
    });

    // hiding that suggestions
    document.addEventListener("click", (e) => {
        if (!searchForm.contains(e.target)) {
            suggestionBox.style.display = "none";
        }
    });

    // whenn click on a suggestion ,need to go that section
    suggestionBox.addEventListener("click", (e) => {
        if (e.target.classList.contains("suggest-item")) {
            const page = pages.find(p => p.name === e.target.innerText.toLowerCase());
            if (page) window.location.href = page.url;
        }
    });

    // this is for manually typing the suggestions
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        const match = pages.find(p => p.name === query);

        if (match) {
            window.location.href = match.url;
        } else {
            alert(`No results found for '${query}'`);
        }
    });
});
