import introText from "../public/assets/images/info-text.png"
import introImage from "../public/assets/images/info-img.png"


function createIntro() {
    const intro = document.createElement("div");
    intro.classList.add("intro");
    intro.style.backgroundImage = "url(assets/images/intro_bg.jpg)";
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
