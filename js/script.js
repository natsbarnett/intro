let param = new URLSearchParams(location.search);

const carrdData = 'js/data.json';
const blogData = 'js/blog.json';


const $title = document.querySelector("title");
const $body = document.querySelector("body");
const $h1 = document.querySelector("main>h1");
const $content = document.querySelector("main>.content");


async function fetching() {
    const resp = await fetch(carrdData)
    json = await resp.json();
    initializeInfo(json)
}



function initializeInfo(data) {
    $title.innerHTML = data[parametre].title;
    $h1.innerHTML = data[parametre].title;
    $body.classList.add(data[parametre].bodyclass);
    $content.innerHTML = data[parametre].content;
}


async function fetchblog() {
    const resp = await fetch(blogData);
    json = await resp.json();
    initBlogInfo(json)
}

function initBlogInfo(data) {
    const maxtext = 80;
    const maxtitle = 20;
    $title.innerHTML = 'Blog';
    $h1.innerHTML = 'Blog';
    document.querySelector("body").classList.add("blog");

    const sortedKeys = Object.keys(data).sort((a, b) => b - a);

    sortedKeys.forEach(key => {
        const item = data[key];
        const title = item.title.length > maxtitle ? item.title.substring(0, maxtitle) + '...' : item.title;
        const date = item.date;
        const contenu = item.content.length > maxtext ? item.content.substring(0, maxtext) + '...' : item.content;

        $content.innerHTML += `<div class="blog-item">
        <div class="blog-title">
        <h2>${title}</h2>
        </div>
        <div class="blog-text">
        <div class="blog-date">Published - ${date}</div>
        <div class="blog-content">${contenu}</div>
        </div>
        <div class="blog-link"><a href="blog.html?blog=${key}">Read more</a></div>
        </div>`;
    });
}



switch (param.get('param')) {
    case ('int'):
        parametre = param.get('param');
        fetching();
        break;
    case ('byf'):
        parametre = param.get('param');
        fetching();
        break;
    case ('other'):
        parametre = param.get('param');
        fetchblog();
        break;
}

