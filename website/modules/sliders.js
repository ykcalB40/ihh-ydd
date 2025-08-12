const slides = [];
for (let i = 0; i < randomNumber(3, 8); i++) {
    slides.push({
        name: "Slide " + i,
        desc1: "Açıklama 1",
        desc2: "Açıklama 2",
        button1: "Buton 1",
        button2: "Buton 2",
        img: "https://placehold.co/1600x900/png"
    });
};

function createSlide({ name, desc1, desc2, button1, button2, img: src }) {
    const article = document.createElement("article");
    article.classList.add("slide");
    article.setAttribute("data-bg", src);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img");
    imgDiv.style.backgroundImage = `url(${src})`;
    imgDiv.setAttribute("aria-hidden", "true");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.setAttribute("role", "group");
    contentDiv.setAttribute("aria-label", name);

    const span = document.createElement("span");
    span.classList.add("pill");
    span.textContent = name;

    const h2 = document.createElement("h2");
    h2.textContent = desc1;

    const p = document.createElement("p");
    p.textContent = desc2;

    const ctaDiv = document.createElement("div");
    ctaDiv.classList.add("cta");

    const a1 = document.createElement("a");
    a1.classList.add("donate-btn");
    a1.href = "#";
    a1.setAttribute("data-modal", "");
    a1.textContent = button1;

    const a2 = document.createElement("a");
    a2.classList.add("small");
    a2.href = "#";
    a2.textContent = button2;

    article.append(imgDiv);
    contentDiv.append(span);
    contentDiv.append(h2);
    contentDiv.append(p);
    ctaDiv.append(a1);
    ctaDiv.append(a2);
    contentDiv.append(ctaDiv);
    article.append(contentDiv);


    return article;

};

const slidesElement = $('#slides');
slides.forEach(data => slidesElement.append(createSlide(data)));

let active = 0;
function goTo(i) {
    active = (i + slides.length) % slides.length;
    slidesElement.style.transform = `translateX(-${active * 100}%)`;
    $$('.carousel-dots button').forEach((b, idx) => b.classList.toggle('active', idx === active));
}

setInterval(() => goTo(active + 1), 6000);