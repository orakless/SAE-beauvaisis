const burgerMenu = document.querySelector<HTMLElement>("#burgerMenu");
const searchMenu = document.querySelector<HTMLElement>("#searchIcon");
const navMenu = document.querySelector<HTMLElement>("#menu");
const bgBlack = document.querySelector<HTMLElement>("#backBlack");
let menuOpen = false;

function openMenu() {
    navMenu.classList.remove("hidden");
    navMenu.animate(
        [
            { transform: "translateY(5em)" },
            { transform: "translateY(0)"}
        ],
        {
            duration: 500,
            iterations: 1,
            easing: "ease-in",
        }
    )
    bgBlack.classList.remove("hidden");
    bgBlack.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 500,
        iterations: 1,
        easing: "ease-in"
    })
    menuOpen = true;
}
function closeMenu() {
    navMenu.animate(
        [
            { transform: "translateY(0)"},
            { transform: "translateY(5em)" }
        ],
        {
            duration: 500,
            iterations: 1,
            easing: "ease-out",
        }
    )

    bgBlack.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 500,
        iterations: 1,
        easing: "ease-out"
    })
    let timer = setTimeout(() => { navMenu.classList.add("hidden"); bgBlack.classList.add("hidden") }, 450);
    menuOpen = false;
}

bgBlack.onclick = closeMenu;

burgerMenu.onclick = () => {
    if (!menuOpen)
        openMenu()
    else closeMenu();
}