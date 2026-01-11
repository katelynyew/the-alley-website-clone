
function createIngredient() {
    const ingredients = document.createElement("div");
    ingredients.classList.add("ingredients");

    const ingredientsData = [
        "We are committed to make our own sugar cane syrup. By picking the all natural, high quality sugar cane, boiling process in house creates the most original flavour. This sweetness is delicate but never overpowering",
        "We insist on making the Deerioca from scratch: making the dough, kneading and rolling the dough into small balls, this procedure creates better texture and aroma for the tapioca. Each bite is unique, satisfying the craving for the perfect taste.",
        "Quality is our guarantee. From choosing the type of tea leaves, the hand-picking process and roasting with other ingredients, each cup of tea has its own determined aroma and taste. The flavour may be short-lived, the memory everlasting."
    ];

    ingredientsData.forEach(item => {
        const p = document.createElement("p");
        p.textContent = item;
        ingredients.append(p);
    });
    
    return ingredients;
}

export default createIngredient;