function randomDate() {
    const day = String(Math.floor(Math.random() * 31) + 1).padStart(2, '0');
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const year = Math.floor(Math.random() * (2030 - 2000 + 1)) + 2000;

    return `${day}.${month}.${year}`;
}

const newsDatas = [];

for (let i = 0; i < randomNumber(3, 8); i++) {
    newsDatas.push({
        title: 'Başlık',
        date: randomDate(),
        img: 'https://placehold.co/800x600/png'
    });
};


function createNews({ title, date, img: src }) {
    const article = document.createElement('article');
    article.classList.add("news", "card");

    const img = document.createElement("img")
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", src);
    img.setAttribute("alt", title);

    const muted = document.createElement("div");
    muted.classList.add("small", "muted");
    muted.innerText = date;

    const h3 = document.createElement("div");
    h3.style.margin = "6px 0 8px";
    h3.innerText = title;

    const p = document.createElement("div");
    p.classList.add("small", "muted");
    p.innerText = "Özet";


    article.append(img);
    article.append(muted);
    article.append(h3);
    article.append(p);

    return article;

};

const news = $('#news');
newsDatas.forEach(data => {
    news.append(createNews(data));
});
