const newsDatas = [
    {
        date: "14.08.2025",
        title: "Yeni Nesil Yapay Zeka Tanıtıldı",
        summary: "Teknoloji devi, insan benzeri düşünme yeteneklerine sahip yeni yapay zeka modelini kamuoyuna sundu. Bu model, doğal dili anlama, karmaşık problemleri çözme ve insanlarla doğal şekilde iletişim kurma konularında çığır açıcı özellikler taşıyor. Şirket yetkilileri, yeni teknolojinin sağlık, eğitim ve mühendislik gibi birçok alanda devrim yaratabileceğini belirtti.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnU3bKv2N9rmjLfxgK48N3Mb66WtEa_lCV1Q&s"
    },
    {
        date: "13.08.2025",
        title: "Dünya Genelinde Sıcaklık Rekoru",
        summary: "Meteoroloji kurumlarının açıkladığı verilere göre 2025 yılı, tarihteki en sıcak yaz olarak kayıtlara geçti. Özellikle Avrupa, Asya ve Kuzey Amerika'da sıcaklıklar mevsim normallerinin çok üzerine çıktı. Uzmanlar, iklim değişikliğinin bu aşırı sıcaklıklarda büyük rol oynadığını vurgularken, hükümetleri acil önlemler almaya çağırdı.",
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
        date: "11.08.2025",
        title: "Mars Görevi Başarıyla Tamamlandı",
        summary: "İnsanlık tarihindeki ilk insanlı Mars görevi, yüzeyden toplanan kaya ve toprak örnekleri ile Dünya'ya geri döndü. Görev ekibi, Mars'ta su izlerine dair önemli bulgular elde etti. NASA, bu verilerin ilerleyen yıllarda Mars'ta kalıcı yaşam alanları kurulması için kritik öneme sahip olacağını açıkladı.",
        img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },
    {
        date: "10.08.2025",
        title: "Yeni Ekonomi Paketi Açıklandı",
        summary: "Hükümet, enflasyonu düşürmek ve ekonomik istikrarı sağlamak amacıyla yeni bir ekonomi paketi yürürlüğe soktu. Paket kapsamında vergi indirimleri, yatırım teşvikleri ve kamu harcamalarında düzenlemeler yer alıyor. Ekonomistler, bu adımların kısa vadede piyasaları rahatlatabileceğini ancak uzun vadeli etkilerinin dikkatle izlenmesi gerektiğini söylüyor.",
        img: "https://images.unsplash.com/photo-1554224155-1696413565d3"
    },
    {
        date: "08.08.2025",
        title: "Deprem Bölgesinde Yeniden İnşa Çalışmaları",
        summary: "Büyük deprem felaketinden etkilenen bölgelerde yeniden inşa çalışmaları hız kesmeden devam ediyor. Resmi açıklamalara göre, şu ana kadar yıkılan evlerin %40'ı tamamlandı ve ailelere teslim edildi. Bölge halkı, yardım kuruluşları ve gönüllülerin desteğiyle yaralarını sarmaya çalışıyor.",
        img: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1"
    },
    {
        date: "05.08.2025",
        title: "Elektrikli Araç Satışlarında Rekor",
        summary: "2025 yılının ilk yarısında elektrikli araç satışları geçen yılın aynı dönemine göre %70 artış gösterdi. Özellikle batarya teknolojisindeki gelişmeler, menzil artışı ve şarj altyapısının yaygınlaşması bu yükselişte etkili oldu. Uzmanlar, önümüzdeki 5 yıl içinde elektrikli araçların dünya pazarının büyük kısmını oluşturacağını tahmin ediyor.",
        img: "https://skywell.com.tr/wp-content/uploads/2022/11/Elektrikli-Arac-Tipleri-Nelerdir-1024x576.jpg"
    }
];



function createNews({ title, summary, date, img: src }) {
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
    p.innerText = summary;


    article.append(img);
    article.append(muted);
    article.append(h3);
    article.append(p);

    return article;

};

const newsInside = $('.newsInside');

newsDatas.forEach(data => {
    newsInside.append(createNews(data));
});
const dots = $(".dots");
for (let i = 0; i < newsDatas.length - 2; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    !i && dot.classList.add("active");

    dots.append(dot);

    dot.addEventListener("click", event => {
        Array.from(dots.children).forEach(d => d.classList.remove("active"));
        event.target.classList.add("active")
        newsInside.style.transform = `translateX(calc((${i * 100}% / 3 + ${i * 10}px) * -1))`;

    });
};
