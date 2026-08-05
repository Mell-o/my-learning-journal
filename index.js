import {articleListings} from "./data.js"

const articleListingsUl = document.querySelector(".article-listings")

const getFormattedDate = (articleDate) => {
    const inputDate = new Date(articleDate)
    const year = inputDate.getFullYear()
    const month = String(inputDate.getMonth() + 1).padStart(2, "0")
    const day = String(inputDate.getDay()).padStart(2, "0")
    return `${year}-${month}-${day}`
}

function buildArticleListingsUl (numOfListings) {

    articleListingsUl.innerHTML = articleListings.slice(0, numOfListings).map(({articleDate, articleTitle, articlePreview, articleImg}) => {
        return `
        <li>
            <article>
                <img src="${articleImg}">
                <time datetime="${getFormattedDate(articleDate)}">${articleDate}</time>
                <h2>${articleTitle}</h2>
                <p>${articlePreview}</p>
            </article>
        </li>
        `
    }).join("")
}


if (window.innerWidth < 1085) {
    buildArticleListingsUl(3)
} else if (window.innerWidth >= 1085 && document.querySelector(".home")) {
    buildArticleListingsUl(articleListings.length)
} else {
    buildArticleListingsUl(3)
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 1085) {
        buildArticleListingsUl(3)
    } else if (window.innerWidth >= 1085 && document.querySelector(".home")) {
        buildArticleListingsUl(articleListings.length)
    } else {
        buildArticleListingsUl(3)
    }
});