const body = document.querySelector("body");
const menuButton = document.querySelector(".menubutton");
const menu = document.querySelector("ul");
const text = document.querySelector(".bigtext");

//constantes voor elke kleur in het menu.
const whiteButton = document.querySelector("ul .whitebg label");
const redButton = document.querySelector("ul .redbg label");
const orangeButton = document.querySelector("ul .orangebg label");
const yellowButton = document.querySelector("ul .yellowbg label");
const greenButton = document.querySelector("ul .greenbg label");
const blueButton = document.querySelector("ul .bluebg label");
const purpleButton = document.querySelector("ul .purplebg label");

//constantes voor alle radiobuttons, zodat ik de checked attribute kan veranderen in een functie.
const whiteRadio = document.querySelector("ul .whitebg label input");
const redRadio = document.querySelector("ul .redbg label input");
const orangeRadio = document.querySelector("ul .orangebg label input");
const yellowRadio = document.querySelector("ul .yellowbg label input");
const greenRadio = document.querySelector("ul .greenbg label input");
const blueRadio = document.querySelector("ul .bluebg label input");
const purpleRadio = document.querySelector("ul .purplebg label input");

//de class .showmenu verplaatst het menu van buiten het scherm naar left:0
const menuFadeIn = () => { menu.classList.add("showmenu") };
const menuFadeOut = () => { menu.classList.remove("showmenu") };
const menuToggle = () => { menu.classList.toggle("showmenu") }

const changeText = (newColor) => {
    if (newColor == "whitebg") text.innerHTML = "Wit";
    else if (newColor == "redbg") text.innerHTML = "Rood";
    else if (newColor == "orangebg") text.innerHTML = "Oranje";
    else if (newColor == "yellowbg") text.innerHTML = "Geel";
    else if (newColor == "greenbg") text.innerHTML = "Groen";
    else if (newColor == "bluebg") text.innerHTML = "Blauw";
    else if (newColor == "purplebg") text.innerHTML = "Paars";
}

const changeColor = (newColor) => {
    currentColor = body.classList; //Als er meer classes aan body toegevoegd zouden worden zou dit niet meer werken.
    body.classList.replace(currentColor, newColor);
    changeText(newColor);
}

const changeColorPlusMenu = (newColor) => {
    changeColor(newColor);
    menuFadeOut();
}

//functies voor de knoppen in het menu
whiteButton.addEventListener("click", function () { changeColorPlusMenu("whitebg") });
redButton.addEventListener("click", function () { changeColorPlusMenu("redbg") });
orangeButton.addEventListener("click", function () { changeColorPlusMenu("orangebg") });
yellowButton.addEventListener("click", function () { changeColorPlusMenu("yellowbg") });
greenButton.addEventListener("click", function () { changeColorPlusMenu("greenbg") });
blueButton.addEventListener("click", function () { changeColorPlusMenu("bluebg") });
purpleButton.addEventListener("click", function () { changeColorPlusMenu("purplebg") });

//events voor het laten verschijnen van het menu met de muis
menuButton.addEventListener("mouseenter", function () { menuFadeIn() });
menuButton.addEventListener("click", function () { menuToggle() })
menu.addEventListener("mouseleave", function () { menuFadeOut() });

//sneltoetsen voor kleuren
document.addEventListener("keydown", function (event) {
    if (event.key == "1") {
        changeColor("whitebg");
        whiteRadio.checked = true;
    }
    else if (event.key == "2") {
        changeColor("redbg");
        redRadio.checked = true;
    }
    else if (event.key == "3") {
        changeColor("orangebg");
        orangeRadio.checked = true;
    }
    else if (event.key == "4") {
        changeColor("yellowbg");
        yellowRadio.checked = true;
    }
    else if (event.key == "5") {
        changeColor("greenbg");
        greenRadio.checked = true;
    }
    else if (event.key == "6") {
        changeColor("bluebg");
        blueRadio.checked = true;
    }
    else if (event.key == "7") {
        changeColor("purplebg");
        purpleRadio.checked = true;
    }
});