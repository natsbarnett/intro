let param = new URLSearchParams(location.search);
parametre = param.get("blog")
const blogData = 'js/blog.json';

const $title = document.querySelector("title");
const $date = document.querySelector(".date");
const $h1 = document.querySelector("main>h1");
const $content = document.querySelector("main>.content");


async function fetchblog() {
    const resp = await fetch(blogData);
    json = await resp.json();
    initBlogInfo(json)
}

function initBlogInfo(data) {
    $title.innerHTML += data[parametre].title;
    $h1.innerHTML = data[parametre].title;
    $date.innerHTML  = 'Published - ' + data[parametre].date;
    $content.innerHTML = data[parametre].content;
}

fetchblog();