interface carrousselItem {
    previewImg: string,
    title: string,
    url: string,
    color: string
}

interface carrousselDOM {
    title: HTMLHeadingElement,
    svg: SVGElement,
    button: HTMLAnchorElement,
    bgImg: HTMLDivElement
}

const items: carrousselItem[] = [
    {
        previewImg: "/img/article-1.jpg",
        title: "Nouvelles brochures !",
        url: "/articles/nouvelles-brochures-office.html",
        color: "fill-sky-500"
    }
]

const DOM: carrousselDOM = {
    title: document.querySelector("#carroussel-view h2"),
    svg: document.querySelector("#carroussel-view svg"),
    button: document.querySelector("#carroussel-view a"),
    bgImg: document.querySelector("#carroussel-view")
}

function changeCarrousselItem(index: number) {
    if (index >= 0 && index < items.length) {
        const itemToShow = items[index];
        DOM.title.innerText = itemToShow.title;

        for (let clas in DOM.svg.classList) {
            if (/fill-.*/.test(clas)) {
                DOM.svg.classList.remove(clas);
                break;
            }
        }

        DOM.svg.classList.add(itemToShow.color);
        DOM.button.href = itemToShow.url;
        DOM.bgImg.style.backgroundImage = `url(${itemToShow.previewImg})`;
    }
}

changeCarrousselItem(0);