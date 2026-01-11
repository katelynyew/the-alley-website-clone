

function createContact() {
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id", "contact");
    contactContainer.style.backgroundImage = "url(/assets/images/contact.jpg)";
    const contactLi = document.createElement("ul");
    contactLi.classList.add("contact-list");
    contactContainer.append(contactLi);
    const franchise = document.createElement("a");
    franchise.setAttribute("href", "https://www.the-alley.ca/form/join-form.aspx");
    franchise.textContent = "Franchise Inquiry";
    const hiring = document.createElement("a");
    hiring.setAttribute("href", "https://www.the-alley.ca/form/job-form.aspx");
    hiring.textContent = "Hiring";
    contactLi.append(franchise, hiring);

    return contactContainer;
}
export default createContact;

