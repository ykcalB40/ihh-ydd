
const programs = [];
for (let i = 0; i < randomNumber(3, 8); i++) {
    programs.push({
        summary: "Başlık",
        desc: "Açıklama",
    });
};

const createProgram = ({ summary: summaryText, desc }) => {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.innerText = summaryText;
    const p = document.createElement("p");
    p.innerText = desc;
    details.append(summary);
    details.append(p);
    return details;
};

const programElement = $("#programsCard");

programs.forEach(data => programElement.append(createProgram(data)));