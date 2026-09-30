/* ================================================
   VISHWAVERSE JAVASCRIPT
================================================ */


/* ================= MOBILE MENU ================= */

const mobileMenu = document.getElementById("mobileMenu");

const mobileNav = document.getElementById("mobileNav");


if (mobileMenu) {

    mobileMenu.addEventListener("click", () => {

        mobileNav.classList.toggle("open");

    });

}


/* ================= SEARCH ================= */

const searchButton =
    document.getElementById("searchButton");

const searchOverlay =
    document.getElementById("searchOverlay");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchResults =
    document.getElementById("searchResults");


const articles = [

    {
        title: "What Is Artificial Intelligence?",
        description: "Understand the fundamentals of AI.",
        link: "blogs.html"
    },

    {
        title: "How Machines Learn From Data",
        description: "A beginner guide to Machine Learning.",
        link: "blogs.html"
    },

    {
        title: "The New Era of Generative AI",
        description: "Explore the rise of generative systems.",
        link: "blogs.html"
    },

    {
        title: "Inside a Neural Network",
        description: "Learn how deep learning works.",
        link: "blogs.html"
    },

    {
        title: "How AI Understands Human Language",
        description: "Introduction to Natural Language Processing.",
        link: "blogs.html"
    },

    {
        title: "Teaching Computers to See",
        description: "Explore Computer Vision.",
        link: "blogs.html"
    }

];


if (searchButton) {

    searchButton.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        setTimeout(() => {

            searchInput.focus();

        }, 100);

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", () => {

        searchOverlay.classList.remove("active");

        searchInput.value = "";

        searchResults.innerHTML = "";

    });

}


/* ESC KEY */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("active");

    }

});


/* SEARCH */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const query =
            searchInput.value.toLowerCase().trim();


        if (!query) {

            searchResults.innerHTML = "";

            return;

        }


        const results = articles.filter(article =>

            article.title
                .toLowerCase()
                .includes(query)

            ||

            article.description
                .toLowerCase()
                .includes(query)

        );


        if (results.length === 0) {

            searchResults.innerHTML = `

                <div class="search-result">

                    <h3>
                        No results found
                    </h3>

                    <p>
                        Try searching for AI, ML or Generative AI.
                    </p>

                </div>

            `;

            return;

        }


        searchResults.innerHTML =
            results.map(article => `

                <a
                    href="${article.link}"
                    class="search-result"
                >

                    <h3>
                        ${article.title}
                    </h3>

                    <p>
                        ${article.description}
                    </p>

                </a>

            `).join("");

    });

}


/* ================= THEME ================= */

const themeButton =
    document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");


        if (
            document.body.classList.contains("light")
        ) {

            themeButton.textContent = "☾";

            localStorage.setItem(
                "vishwaTheme",
                "light"
            );

        } else {

            themeButton.textContent = "☼";

            localStorage.setItem(
                "vishwaTheme",
                "dark"
            );

        }

    });

}


/* LOAD THEME */

const savedTheme =
    localStorage.getItem("vishwaTheme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeButton) {

        themeButton.textContent = "☾";

    }

}


/* ================= NEWSLETTER ================= */

const newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Welcome to VishwaVerse! You are subscribed."
            );

            newsletterForm.reset();

        }
    );

}


/* ================= SCROLL ANIMATION ================= */

const cards =
    document.querySelectorAll(
        ".blog-card, .topic, .editor-content"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.12
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(25px)";

    card.style.transition =
        "all 0.7s ease";

    observer.observe(card);

});