import {articleListings} from "./data.js"

const articleListingsUl = document.querySelector(".article-listings")

const getFormattedDate = (articleDate) => {
    const inputDate = new Date(articleDate)
    const year = inputDate.getFullYear()
    const month = String(inputDate.getMonth() + 1).padStart(2, "0")
    const day = String(inputDate.getDay()).padStart(2, "0")
    return `${year}-${month}-${day}`
}

articleListingsUl.innerHTML = articleListings.map(({articleDate, articleTitle, articlePreview, articleImg}) => {
    return `
    <article>
        <img src="${articleImg}">
        <time datetime="${getFormattedDate(articleDate)}">${articleDate}</time>
        <h2>${articleTitle}</h2>
        <p>${articlePreview}</p>
    </article>
    `
}).join("")