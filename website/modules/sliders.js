const slides = [
    {
        category: "Açlık",
        pill: "Açlık Krizi",
        title: "Gıda Güvencesi Yok",
        subtitle: "Her yıl milyonlarca insan yetersiz beslenme nedeniyle yaşamını yitiriyor.",
        buttons: ["Bağış Yap", "Daha Fazla Bilgi"],
        bg: "https://static.iddef.org/site/2022_03_30_10_49_00_jzibD7yAmeAa7Zs.jpg"
    },
    {
        category: "Su",
        pill: "Temiz Su",
        title: "Suya Erişim Hakkı",
        subtitle: "Dünya genelinde 2 milyardan fazla insan temiz suya ulaşamıyor.",
        buttons: ["Destek Ol", "Projeleri Gör"],
        bg: "https://static.dw.com/image/19555744_605.webp"
    },
    {
        category: "Eğitim",
        pill: "Eğitim Eşitsizliği",
        title: "Okula Gitmeyen Çocuklar",
        subtitle: "Bazı bölgelerde kız çocuklarının %60'ı hiç eğitim alamıyor.",
        buttons: ["Eğitime Katkı Sağla", "Daha Fazla Oku"],
        bg: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
    },
    {
        category: "Sağlık",
        pill: "Sağlık Hizmeti",
        title: "Temel Tedaviye Erişim Yok",
        subtitle: "Birçok kırsal bölgede hastanelere ulaşmak günler sürebiliyor.",
        buttons: ["Sağlık Projeleri", "Hikayeleri Oku"],
        bg: "https://ihh.org.tr/public/news/1/1048/1048-10-insanlik-afrikada-oluyor-ihh-fotogaleri[800x532].jpg"
    },
    {
        category: "Barınma",
        pill: "Barınma Sorunu",
        title: "Güvenli Ev Yok",
        subtitle: "Milyonlarca insan savaş ve doğal afetler yüzünden evsiz kalıyor.",
        buttons: ["Destek Ol", "Daha Fazla Bilgi"],
        bg: "https://static.birgun.net/resim/haber-detay-resim/2022/09/15/konut-krizi-degil-barinma-sorunu-1063976-5.jpg"
    },
    {
        category: "İklim",
        pill: "İklim Krizi",
        title: "Doğa Afetleri Artıyor",
        subtitle: "Kuraklık ve sel, yoksul bölgelerde yaşamı daha da zorlaştırıyor.",
        buttons: ["İklim İçin Harekete Geç", "Projeleri Gör"],
        bg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbt0A3sspeO2hBOjqukU1LrhdHJkW3uGuoA&s"
    }
];

function createButton(slide, i) {
    const div = document.createElement("div");
    div.classList.add("slideButton");

    div.innerText = slides[i].category;
    div.dataset.queueIndex = i;

    div.addEventListener("click", () => {

    });

    return div;
};

function createSlide({ pill, title, subtitle, buttons, bg }) {
    const article = document.createElement("article");
    article.classList.add("slide");
    article.setAttribute("data-bg", bg);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img");
    imgDiv.style.backgroundImage = `url(${bg})`;
    imgDiv.setAttribute("aria-hidden", "true");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.setAttribute("role", "group");
    contentDiv.setAttribute("aria-label", pill);

    const span = document.createElement("span");
    span.classList.add("pill");
    span.textContent = pill;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = subtitle;

    const ctaDiv = document.createElement("div");
    ctaDiv.classList.add("cta");

    const a1 = document.createElement("a");
    a1.classList.add("donate-btn");
    a1.href = "#";
    a1.setAttribute("data-modal", "");
    a1.textContent = buttons[0];

    const a2 = document.createElement("a");
    a2.classList.add("small");
    a2.href = "#";
    a2.textContent = buttons[1];

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

const slidesElement = $('#slides'), slideButtons = $(".slideButtons");

slides.forEach((data, i) => {
    const slide = createSlide(data);
    slidesElement.append(slide);
    slideButtons.append(createButton(slide, i));
});

const slideButtonElements = $$(".slideButton");

let active = 0;
slideButtonElements[0].classList.add("active");

slideButtonElements.forEach(elem => elem.addEventListener("click", event => {
    slideButtonElements.forEach((elem, i) => {
        elem.classList.remove("active");
    });
    event.target.classList.add("active");
    clearInterval(interval);
    interval = setInterval(() => goTo(active + 1), 6000);

    goTo(event.target.dataset.queueIndex)
}));
function goTo(i) {
    active = i % slides.length;
    slidesElement.style.transform = `translateX(-${active * 100}%)`;

    slideButtonElements.forEach((elem, i) => {
        elem.classList.remove("active");
        i == active && elem.classList.add("active")
    });
}

let interval = setInterval(() => goTo(active + 1), 6000);