
import map from "../public/assets/images/google_map.jpg"


function createStore() {
    const storeData = [
    {
        name: "Aurora",
        address: "B2-B, 15975 Bayview Ave, Aurora, ON L4G 7Y3",
        tel: "(905) 713-3088",
        open: [
            "Mon - Thurs 10:30am - 9:00pm",
            "Fri - 11:30am - 10:00pm",
            "Sun - 11:00am - 10:00pm",
            "Sun - 11:00am -  9:00pm"
    ]},
    {
        name: "Brampton",
        address: "Unit 3 - 10025 Hurontario Street, Brampton, ON L6Z 0E6",
        tel: "(905) 846-4888",
        open: [
            "Sun - Thurs 12:00pm - 10:00pm",
            "Fri - Sat 12:00pm - 12:00am"
    ]},
    {
        name: "Guelph",
        address: "U92 Gordon St, Guelph, ON N1H 4H6",
        tel: "(519) 265-9868",
        open: [
            "Fri - Sat 11:30am - 11:30pm",
            "Sun - 11:30am - 9:00pm"
    ]},
    {
        name: "Guelph",
        address: "U92 Gordon St, Guelph, ON N1H 4H6",
        tel: "(519) 265-9868",
        open: [
            "Fri - Sat 11:30am - 11:30pm",
            "Sun - 11:30am - 9:00pm"]
    },
    {
        name: "Hamilton",
        address: "Unit 5 - 1050 King Street W, Hamilton, ON L8S 1L5",
        tel: "(905) 522-5300",
        open: [
            "Daily - 11:30am - 11:00pm"
        ]
    },
    {
        name: "Markham - Gibson",
        address: "Unit 118 - 30 Gibson Dr, Markham, ON L3R 8B5",
        tel: "(289) 333-9636",
        open: [
            "Sun - Thurs 11:30am - 10:00pm",
            "Fri & Sat 11:30am - 11:00pm"
        ]
    },
    {
        name: "Missisauga - Erin Mills",
        address: "Unit 8B - 2901 Eglinton Ave W, Mississauga, ON, L5M 6J3",
        tel: "(905) 607-7770",
        open: [
            "Mon - Thurs 12:00pm - 9:00pm",
            "Fri & Sat 12:00pm - 11:00pm",
            "Sun - 12:00pm - 10:00pm"
        ]
    },
    {
        name: "Richmond Hill",
        address: "No.1 - 8750 Bayview Avenue, Richmond Hill, ON, L4B 4V9",
        tel: "(289) 379-8184",
        open: [
            "Mon - Thurs 9:00am - 9:00pm",
            "Fri & Sat 9:00am - 11:00pm",
            "Sun - 9:00am - 10:00pm"
        ]
    },
    {
        name: "Scarborugh - Midland",
        address: "F107 - 3260 Midland Ave, Scarborough, ON M1V 0C5",
        tel: "(647) 349-8200",
        open: [
            "Daily - 12:00pm - 11:30pm"
        ]
    },
    {
        name: "Toronto - Bloor",
        address: "621 Bloor St W, Toronto, ON M6G 1K8",
        tel: "(416) 551-2577",
        open: [
            "Mon - Thurs 12:00pm - 9:00pm",
            "Fri - Sun 12:00pm - 10:00pm"
        ]
    }
    ]
    // start of store section
    const locationContainer = document.createElement("div");
    locationContainer.setAttribute("id", "store");

    const p = document.createElement("p");
    p.textContent = "Choose your province";
    locationContainer.append(p);

    const locationBtnLi = document.createElement("ul");
    locationBtnLi.classList.add("location-btn");
    locationBtnLi.innerHTML = '<li><a href="">Alberta</a></li><li><a href="">British Columbia</a></li><li><a href="">Manitoba</a></li><li><a href="">Ontario</a></li><li><a href="">Quebec</a></li>';
    locationContainer.append(locationBtnLi);

    const storeContainer = document.createElement("div");
    storeContainer.classList.add("store-container");
    locationContainer.append(storeContainer);

    const storeLi = document.createElement("ul");
    storeLi.classList.add("store-list");
    storeContainer.append(storeLi);

    storeData.forEach((store, index) => {
        const li = document.createElement("li");
        const ul = document.createElement("ul");
        ul.classList.add("store", `store-${index}`);
        // store name list
        const storeNameLi = document.createElement("li");
        storeNameLi.classList.add("store-name");

        const storeName = document.createElement("p");
        storeName.textContent = store.name;
        storeNameLi.append(storeName);
        ul.append(storeNameLi);

        // stor info list
        const storeInfoLi = document.createElement("li");
        storeInfoLi.classList.add("store-info");

        const address = document.createElement("p");
        address.classList.add("address");
        address.textContent = store.address;
        storeInfoLi.append(address);

        const tel = document.createElement("p");
        tel.classList.add("tel");
        tel.textContent = store.tel;
        storeInfoLi.append(tel);

        const open = document.createElement("p");
        open.classList.add("open");
        open.style.whiteSpace = "pre-line"; // makes \n render as new line
        open.textContent = store.open.join("\n");
        storeInfoLi.append(open);

        ul.append(storeInfoLi);

        // store map list
        const storeMapLi = document.createElement("li");
        storeMapLi.classList.add("store-map");
        const link = document.createElement("a");
        link.setAttribute("href", "example");
        const icon = document.createElement("img");
        icon.setAttribute("src", map);
        icon.setAttribute("alt", "google-map");
        link.append(icon);
        storeMapLi.append(link);

        ul.append(storeMapLi);

        li.append(ul);

        storeLi.append(li);
    });

    return locationContainer;
}

export default createStore;