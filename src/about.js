import titleImg from "../public/assets/images/about-title.png"

function createAbout() {
    const scrollContainer = document.createElement("div");
    scrollContainer.classList.add("scroll-container");

    const about = document.createElement("div");
    about.style.backgroundImage = "url(/assets/images/about.jpg)";
    about.setAttribute("id", "about");
    scrollContainer.append(about);
    const ul = document.createElement("ul");
    const titleLi = document.createElement("li");
    const titleImage = document.createElement("img");
    titleImage.setAttribute("src", titleImg);
    titleImage.setAttribute("alt", "title-img");
    titleLi.append(titleImage);

    const textLi = document.createElement("li");
    const p1 = document.createElement("p");
    p1.innerHTML = "The Alley Hub is a new hybrid destination where bubble tea and unique coffee blends meet. It is the first of its kind with a collaborative multi-purpose room that can accommodate up to 10 people, individual working pods, and a lounge area.<br>The Alley Hub carries an exclusive menu with hand-crafted drinks and grab-and-go cafe food including pastries, salads, fried snacks and house blended specialty coffee.";
    const p2 = document.createElement("p");
    p2.innerHTML = "Planning an event?<br>Submit your event details to find out what we can offer.";
    textLi.append(p1);
    textLi.append(p2);

    ul.append(titleLi, textLi);
    about.append(ul);

    return scrollContainer;
}

export default createAbout;