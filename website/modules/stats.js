const stats = [];

for (let i = 0; i < randomNumber(3, 8); i++) {
    stats.push({
        num: randomNumber(0, 6000),
        name: "İstatik 3",
    });
};

const statsElement = $(".stats");

function createStat({ num: number, name }) {
    const stat = document.createElement("div");
    stat.classList.add("stat");

    const num = document.createElement("div");
    num.classList.add("num");
    num.dataset.target = number;
    num.innerText = 1;

    const muted = document.createElement("div");
    muted.classList.add("small", "muted");
    muted.innerText = name;

    stat.append(num);
    stat.append(muted);

    const max = Number(num.dataset.target);
    const smoothIncrease = setInterval(() => {
        num.innerText = Math.ceil(Number(num.innerText) * 1.05);
        if (Number(num.innerText) >= max) {
            num.innerText = max;
            clearInterval(smoothIncrease);
        };
    }, 20);

    return stat;

};
stats.forEach(data => statsElement.append(createStat(data)));