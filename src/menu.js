import mark from "../public/assets/images/menu-mark.svg"

function createMenu() {
    const menuData = [{
    // deerioca data
        className: "deerioca-section",
        title: ["Brown Sugar Deerioca Series", "黑糖鹿丸系列"],
        items: [
        "Deerioca Fever (Fresh Milk / Soy Milk)",
        "Deerioca Matcha (Fresh Milk / Soy Milk)",
        "Deerioca Puff (Fresh Milk / Soy Milk)",
        "Deerioca Ube Taro (Fresh Milk / Soy Milk)"
    ]},
    {
        // crunchy data
        className: "crunchy-section",
        title: ["Crunchy Milk Tea Series", "白霜脆奶系列"],
        items: [
        "Crunchy Tiramisu Milk Tea",
        "Crunchy Brown Sugar Milk Tea",
        "Crunchy Cocoa Milk Tea",
        "Crunchy Strawberry Milk Tea"
    ]},
    {
        // milktea data
        className: "milktea-section",
        title: ["Milk Tea / Latte Series", "濃醇奶香 / 拿鐵系列"],
        items: [
        "The Alley Trio Milk Tea",
        "Royal No.9 Milk Tea",
        "Classic Milk Tea",
        "Iron Goddess Milk Tea",
        "Jasmine Green Milk Tea",
        "Earl Grey Milk Tea",
        "Matcha Latte"
    ]},
    {
        // specialty data
        className: "specialty-section",
        title: ["The Alley Specialty", "鹿角特調系列"],
        items: [
        "Snow Strawberry Lulu",
        "Passionfruit Green Tea",
        "Honey Green Tea",
        "Lime Green / Black Tea",
        "Peach Oolong",
        "Mango Green Tea",
        "Orange Lulu",
        "Strawberry Green Tea",
        "Snow Velvet Peach Oolong Tea",
        "Snow Velvet Brown Sugar Latte"
    ]}];

    function createMenuSection(className, title, items) {

        const section = document.createElement("section");
        section.classList.add(className);

        const section_title_container = document.createElement("div");
        section_title_container.classList.add("title");
        title.forEach(name => {
            const section_title = document.createElement("p");
            section_title.textContent = name;
            section_title_container.append(section_title);
        });
        section.append(section_title_container);

        const ul = document.createElement("ul");
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.append(li);
        });
        section.append(ul);
        return section;
    }

    // add menu -> items , legend -> items: category-list
    const menu_container = document.createElement("div");
    menu_container.setAttribute("id", "menu");
    const menu_mark = document.createElement("img");
    menu_mark.setAttribute("src", mark);

    menu_container.append(menu_mark);

    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("items");

    menuData.forEach(category => {
        const className = category.className;
        const title = category.title;
        const itemLi = category.items;
        const section = createMenuSection(className,title,itemLi);
        itemsContainer.append(section);
    });

    menu_container.append(itemsContainer);

    // const legends = [
    //     "img = Recommended",
    //     "img = iced",
    //     "img = hot",
    //     "img = Fixed Amount of Ice",
    //     "img = Fixed Sweetness",
    //     "img = Regular",
    //     "img = Large"
    // ]
    // const legendContainer = document.createElement("div");
    // legendContainer.classList.add("legend");

    // const legendLi = document.createElement("ul");
    // legends.forEach(legend => {
    //     const li = document.createElement("li");
    //     li.textContent = legend;
    //     legendLi.append(li);
    // });
    // legendContainer.append(legendLi);
    // menu_container.append(legendContainer);
    
    return menu_container;
}

export default createMenu;



