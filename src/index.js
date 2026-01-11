import "./style.css"
import createIntro from "./intro.js"
import createAbout from "./about.js"
import createMenu from "./menu.js"
import createIngredient from "./ingredients.js"
import createContact from "./contact.js"
import createStore from "./store.js"

console.log("self compassion");


const content = document.querySelector("#content");
content.append(
    createIntro(),
    createAbout(),
    createMenu(),
    createIngredient(),
    createContact(),
    createStore()
);


