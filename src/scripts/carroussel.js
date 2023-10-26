let selectedBtn = -1;
function getBottomButton(index) {
    return `<svg id="cbtn${index}" onclick="changeCarrousselItem(${index})" class="transition-all fill-gray-200 stroke-gray-400 hover:scale-110 hover:cursor-pointer" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <ellipse cx="12" cy="12" rx="9.6011" ry="9.6011" stroke-linecap="round" stroke-width="3.7795"/> </svg>`;
}
function nextItem() {
    let nextIndex = selectedBtn + 1;
    if (nextIndex >= items.length)
        nextIndex = 0;
    changeCarrousselItem(nextIndex);
}
function precItem() {
    let precIndex = selectedBtn - 1;
    if (precIndex < 0)
        precIndex = items.length - 1;
    changeCarrousselItem(precIndex);
}
function changeFocusBtn(index) {
    if (selectedBtn !== index && index < 4 && index >= 0) {
        if (selectedBtn !== -1) {
            let currentSelected = document.querySelector(`#cbtn${selectedBtn}`);
            currentSelected.classList.add("fill-gray-200", "stroke-gray-400", "hover:scale-110");
            currentSelected.classList.remove("fill-sky-500", "stroke-sky-700", "scale-[1.2]", "hover:scale-[1.3]");
        }
        let newSelected = document.querySelector(`#cbtn${index}`);
        newSelected.classList.remove("fill-gray-200", "stroke-gray-400", "hover:scale-110");
        newSelected.classList.add("fill-sky-500", "stroke-sky-700", "scale-[1.2]", "hover:scale-[1.3]");
        selectedBtn = index;
    }
}
const items = [
    {
        previewImg: "/img/Conseil18dec19.jpg",
        title: "Imaginer le territoire de l'Agglo du Beauvaisis à l'horizon 2035",
        url: "/article2035.html",
        color: "fill-sky-500"
    },
    {
        previewImg: "/img/image_atelier.jpg",
        title: "La fresque du climat s'ouvre aux associations et aux entreprises",
        url: "/articleCLIMAT.html",
        color: "fill-emerald-500"
    }
];
const DOM = {
    title: document.querySelector("#carroussel-view h2"),
    svg: document.querySelector("#carroussel-view svg"),
    button: document.querySelector("#carroussel-view a"),
    bgImg: document.querySelector("#carroussel-view"),
    controlsB: document.querySelector("#carroussel-controls")
};
function changeCarrousselItem(index) {
    if (index >= 0 && index < items.length) {
        DOM.svg.classList.remove(items[selectedBtn].color);
        changeFocusBtn(index);
        const itemToShow = items[index];
        DOM.title.innerText = itemToShow.title;
        DOM.svg.classList.add(itemToShow.color);
        DOM.button.href = itemToShow.url;
        DOM.bgImg.style.backgroundImage = `url(${itemToShow.previewImg})`;
    }
}
function initializeCarroussel() {
    for (let i = 0; i < items.length; i++) {
        DOM.controlsB.innerHTML += getBottomButton(i);
    }
}
initializeCarroussel();
changeFocusBtn(0);
changeCarrousselItem(0);
