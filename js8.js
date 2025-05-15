let images = [
    {
        name: "Tralarelo Tralala",
        description: "Shark with nikes",
        year: 2025,
        image: "https://fbi.cults3d.com/uploaders/41050705/illustration-file/ba00d2d2-a6ce-42b9-a7f0-f7722db96c5a/tralalero-tralala.jpg"
    },
    {
        name: "Liriliri Larila",
        description: "Elefant from desert",
        year: 2025,
        image: "https://images.cults3d.com/TeXQ19T6w_QKArdjBQkk9ZMjf_0=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/25344900/illustration-file/a48c673d-2403-4087-b801-1ab80127f24f/images.jpg"
    },
    {
        name: "Brr Brr Patapim",
        description: "Baoba man",
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsyxgK1fZHnDo6LyhpjZvEq4DaQ8XOceboQ&s"
    },
    {
        name: "HOTSPOOOTT",
        description: "I Just Need Some Internet Bro",
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCKNtJbMnBQ9sdoWAcq4dkq3LHlEQPoewrA&s"
    },
    {
        name: "Food Bro Food",
        description: "Just Gime Some Food Bro",
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD99J52Qs_MSXMkHoxKc3RduURs4bsYUuRw&s"
    },
    {
        name: "Picus Dicus de Bicos de Dicus",
        description: "Crazy Pigion from Rome",
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSElOxm6MVPAvR1wA1I7jUOncono8xxVTuw&s"
    },
    {
        name: "Cappucino Assasino",
        description: "Coffee Killer of Men",
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iysFU5nvg8JQrlO3QXvJmzv550wq41AfPBkvUsiuXsXyhBYnmZM2wU338hY6odwSORc&usqp=CAU"
    },
    {
        name: "La Policia Noo",
        description: "nooooOOOooOOooo la policia NooooOOOooo",
        year: 2025,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwJeLxRGONxuxjXsVdm6RlD5VImeQikjpQg&s"
    },
    {
        name: "Bombed Minion",
        description: "Jus some crazy ass stupid minion",
        year: 2025,
        image: "https://tse4.mm.bing.net/th?id=OIP.mNjmjlPMpVZLJEXgQfxa7gHaHa&pid=Api   "
    },
    {
        name: "Trulimero Trulichina",
        description: "Fish Ball Cat",
        year: 2025,
        image: "https://img1.yeggi.com/page_images_cache/9543615_-trulimero-trulicina-mem-stl-file-for-3d-printing-"
    },
    {
        name: "Obama Gamer",
        description: "Pov: Obama Gaming",
        year: 2025,
        image: "https://preview.redd.it/presidential-gamers-v0-h20dhx7k0vjd1.jpg?width=640&crop=smart&auto=webp&s=5221f8063f1a2badfdb2994df465d851c390282a"
    }
];


const container = document.querySelector(".container");

function createCard(crd) {
    const cards = document.createElement("div");
    cards.classList.add("card");
    container.appendChild(cards);

    const inner = document.createElement("div");
    inner.classList.add("card-inner");
    cards.appendChild(inner)

    const front = document.createElement("div");
    const img = document.createElement("img");
    img.src = crd.image;
    img.alt = crd.name;
    front.classList.add("card-front")
    front.appendChild(img);
    inner.appendChild(front);

    const back = document.createElement("ul");
    back.classList.add("card-back");
    back.innerHTML = `
    <li>${crd.name}</li>
    <li>${crd.year}</li>
    <li>${crd.description}</li>
    `;
    inner.appendChild(back);

};

function renderizar() {
    container.innerHTML = '';
    const start = page * limit;
    const end = start + limit;
    images.slice(start, end).forEach(card => createCard(card));
    updatebutton();
}

var page = 0;
var limit = 4; 

renderizar();

const nextbutton = document.querySelector("#nextbutton");

nextbutton.addEventListener("click", () => {
    if ((page + 1) * limit < images.length) {
        page++;
        renderizar();
    }
})

const previousbutton = document.querySelector("#previousbutton");

previousbutton.addEventListener("click", () => {
    if ((page - 1) * limit >= 0) {
        page--;
        renderizar();
    }
})

function updatebutton() {
    const prevBtn = document.querySelector("#previousbutton");
    const nextBtn = document.querySelector("#nextbutton");
    const pageCount = Math.ceil(images.length / limit);

    prevBtn.disabled = (page === 0);
    nextBtn.disabled = (page === pageCount - 1);


}




