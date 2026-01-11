import sugarImg from "../public/assets/images/sugar.png"
import pearlImg from "../public/assets/images/pearl.png"
import leavesImg from "../public/assets/images/leaves.png"

function createIngredient() {
    const ingredients = document.createElement("div");
    ingredients.classList.add("ingredients");
    ingredients.style.backgroundImage = "url(assets/images/intro_bg.jpg)";

    const ingredientContainer = document.createElement("div");
    ingredientContainer.classList.add("container");
    ingredients.append(ingredientContainer);

    const ingredientsData = [{
        name: "sugar",
        title: "Making Our Own Sugar Cane Syrup",
        img: sugarImg,
        text: "We are committed to make our own sugar cane syrup. By picking the all natural, high quality sugar cane, boiling process in house creates the most original flavour. This sweetness is delicate but never overpowering."
    },
    {
        name: "pearl",
        title: "Freshly Prepared Tapioca (Deerioca)",
        img: pearlImg,
        text: "We insist on making the Deerioca from scratch: making the dough, kneading and rolling the dough into small balls, this procedure creates better texture and aroma for the tapioca. Each bite is unique, satisfying the craving for the perfect taste."
    },
    {
        name: "leaves",
        title: "Carefully Selected Tea Leaves",
        img: leavesImg,
        text: "Quality is our guarantee. From choosing the type of tea leaves, the hand-picking process and roasting with other ingredients, each cup of tea has its own determined aroma and taste. The flavour may be short-lived, the memory everlasting."
    },   
    ];

  

    ingredientsData.forEach((item, index) => {
        // add image box
        const imgBox = document.createElement("div");
        imgBox.classList.add(`box-${index+1}b`)
        ingredientContainer.append(imgBox);
        const imgContainer = document.createElement("div");
        imgContainer.classList.add(item.name);
        imgBox.append(imgContainer);
        const img = document.createElement("img");
        img.setAttribute("src", item.img);
        imgContainer.append(img);
       

        //add title box
        const titleBox = document.createElement("div");
        titleBox.classList.add(`box-${index+1}a`);
        ingredientContainer.append(titleBox);
        const titleContainer = document.createElement("div");
        titleContainer.classList.add(item.name);
        const title = document.createElement("p");
        title.textContent = item.title;
        titleContainer.append(title);
        titleBox.append(titleContainer);

        

        // add text box
        const textBox = document.createElement("div");
        textBox.classList.add(`box-${index+1}c`);
        ingredientContainer.append(textBox);
        const textContainer = document.createElement("div");
        textContainer.classList.add(item.name);
        textBox.append(textContainer);
        const text = document.createElement("p");
        text.textContent = item.text;
        textContainer.append(text);
    });
    
    return ingredients;
}

export default createIngredient;