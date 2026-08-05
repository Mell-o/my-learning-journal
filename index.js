import {articleListings} from "./data.js"

const articleListingsUlHome = document.querySelector(".article-listings.home")
const articleListingsUlAlt = document.querySelector(".article-listings.alt")

console.log(articleListingsUlHome)
console.log(articleListingsUlAlt)

const getFormattedDate = (articleDate) => {
    const inputDate = new Date(articleDate)
    const year = inputDate.getFullYear()
    const month = String(inputDate.getMonth() + 1).padStart(2, "0")
    const day = String(inputDate.getDay()).padStart(2, "0")
    return `${year}-${month}-${day}`
}

function buildArticleListingsUl (numOfListings) {
        return  articleListings.slice(0, numOfListings).map(({articleDate, articleTitle, articlePreview, articleImg}) => {
            return `
            <li>
                <article>
                    <img src="${articleImg}" alt="">
                    <time datetime="${getFormattedDate(articleDate)}">${articleDate}</time>
                    <h2>${articleTitle}</h2>
                    <p>${articlePreview}</p>
                </article>
            </li>
            `
        }).join("")
}


if (articleListingsUlHome && window.innerWidth < 1085) {
    articleListingsUlHome.innerHTML = buildArticleListingsUl(3)
} else if (articleListingsUlHome && window.innerWidth >= 1085) {
    articleListingsUlHome.innerHTML = buildArticleListingsUl(6)
} else if (articleListingsUlAlt) {
    articleListingsUlAlt.innerHTML = buildArticleListingsUl(3)
}

window.addEventListener('resize', () => {
   if (articleListingsUlHome && window.innerWidth < 1085) {
        articleListingsUlHome.innerHTML = buildArticleListingsUl(3)
   } else if (articleListingsUlHome && window.innerWidth >= 1085) {
    articleListingsUlHome.innerHTML = buildArticleListingsUl(6)
    }
});