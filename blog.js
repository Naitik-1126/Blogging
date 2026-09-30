/* =====================================================
   VISHWAVERSE BLOG PAGE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function () {

            mobileNav.classList.toggle("show");

        }
    );

}


/* =====================================================
   CATEGORY FILTER
===================================================== */

const categoryButtons =
    document.querySelectorAll(
        ".category-btn"
    );

const blogCards =
    document.querySelectorAll(
        ".full-blog-card"
    );


categoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                /* Remove active */

                categoryButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Add active */

                button.classList.add(
                    "active"
                );


                const selectedCategory =
                    button.dataset.category;


                let visibleCards = 0;


                blogCards.forEach(
                    function (card) {

                        const cardCategory =
                            card.dataset.category;


                        if (
                            selectedCategory === "all" ||
                            cardCategory ===
                                selectedCategory
                        ) {

                            card.style.display =
                                "block";

                            visibleCards++;

                        } else {

                            card.style.display =
                                "none";

                        }

                    }
                );


                checkNoResults(
                    visibleCards
                );

            }
        );

    }
);


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
    document.getElementById(
        "blogSearch"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchValue =
                searchInput.value
                    .toLowerCase()
                    .trim();


            let visibleCards = 0;


            blogCards.forEach(
                function (card) {

                    const title =
                        card.dataset.title
                            .toLowerCase();

                    const category =
                        card.dataset.category
                            .toLowerCase();

                    const content =
                        card.innerText
                            .toLowerCase();


                    if (
                        title.includes(
                            searchValue
                        ) ||
                        category.includes(
                            searchValue
                        ) ||
                        content.includes(
                            searchValue
                        )
                    ) {

                        card.style.display =
                            "block";

                        visibleCards++;

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );


            checkNoResults(
                visibleCards
            );

        }
    );

}


/* =====================================================
   NO RESULTS
===================================================== */

function checkNoResults(
    visibleCards
) {

    const noResults =
        document.getElementById(
            "noResults"
        );


    if (!noResults) {
        return;
    }


    if (visibleCards === 0) {

        noResults.style.display =
            "block";

    } else {

        noResults.style.display =
            "none";

    }

}


/* =====================================================
   THEME BUTTON
===================================================== */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-mode"
            );

        }
    );

}


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "email"
                ).value;


            if (email) {

                alert(
                    "Thank you for subscribing to VishwaVerse!"
                );

                newsletterForm.reset();

            }

        }
    );

}


/* =====================================================
   READ ARTICLE BUTTON
===================================================== */

const readButtons =
    document.querySelectorAll(
        ".blog-read"
    );


readButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Article page will be connected next!"
                );

            }
        );

    }
);