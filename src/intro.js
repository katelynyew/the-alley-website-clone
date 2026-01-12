import introText from "./assets/images/info-text.png"
import introImage from "./assets/images/info-img.png"
import introBg from "./assets/images/intro_bg.jpg"

function createIntro() {
    const intro = document.createElement("div");
    intro.classList.add("intro");
    intro.style.backgroundImage = `url(${introBg})`;
    const ul = document.createElement("ul");
    const intro_text = document.createElement("li");
    const intro_img = document.createElement("li");

    const text = document.createElement("img");
    text.setAttribute("src", introText);
    const img = document.createElement("img");
    img.setAttribute("src", introImage);
    img.setAttribute("alt", "intro-img");

    intro_text.append(text);
    intro_img.append(img);

    ul.append(intro_img, intro_text);

    intro.append(ul);

    return intro;
}

export default createIntro;
