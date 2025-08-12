

const campaigns = [];
for (let i = 0; i < randomNumber(3, 8); i++) {
    const max = randomNumber(0, 100000);
    campaigns.push({
        name: "Kampanya",
        desc: "Açıklama",

        collected: randomNumber(0, max),
        need: max,
    });
};

const createCampaign = ({ name, desc, need, collected }) => {

    const article = document.createElement("article");
    article.classList.add("card");
    article.setAttribute("aria-label", name);

    const h3 = document.createElement("h3");
    h3.textContent = name;

    const p = document.createElement("p");
    p.classList.add("small", "muted");
    p.textContent = desc;


    const spacer = document.createElement("div");
    spacer.style.height = "10px";


    const progress = document.createElement("div");
    progress.classList.add("progress");
    progress.setAttribute("role", "progressbar");
    progress.setAttribute("aria-valuemin", "0");
    progress.setAttribute("aria-valuemax", "100");
    progress.setAttribute("aria-valuenow", String(Math.floor(collected / need * 100)));

    const progressBar = document.createElement("b");
    progressBar.style.width = `${Math.floor(collected / need * 100)}%`;

    const bottomDiv = document.createElement("div");
    bottomDiv.style.display = "flex";
    bottomDiv.style.justifyContent = "space-between";
    bottomDiv.style.alignItems = "center";
    bottomDiv.style.marginTop = "12px";

    const infoText = document.createElement("div");
    infoText.classList.add("small", "muted");
    infoText.textContent = `${progressBar.style.width} toplandı (${collected} / ${need})`;

    // <div><a class="donate-btn" href="#donateModal" data-modal>Bağış Yap</a></div>
    const donateWrapper = document.createElement("div");
    const donateLink = document.createElement("a");
    donateLink.classList.add("donate-btn");
    donateLink.setAttribute("data-modal", "");
    donateLink.textContent = "Bağış Yap";

    article.append(h3);
    article.append(p);
    article.append(spacer);
    progress.append(progressBar);
    article.append(progress);
    bottomDiv.append(infoText);
    donateWrapper.append(donateLink);
    bottomDiv.append(donateWrapper);
    article.append(bottomDiv);

    return article;

};

const campaignsElement = $("#campaigns");

campaigns.forEach(data => campaignsElement.append(createCampaign(data)));