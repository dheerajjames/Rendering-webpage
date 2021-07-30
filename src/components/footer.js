// div
//    logo
//    copyright

export const footer = (props) => {
    let markup = document.createElement("div");
    markup.classList.add("footer");
    let footer = document.createElement("div");
    footer.classList.add("company-logo");
    let logoImg = document.createElement("img");
    logoImg.classList.add('logo');
    logoImg.src = props.logo.imgSrc;
    logoImg.alt = props.logo.alt;
    let footertext = document.createElement("p");
    footertext.innerText = props.copyrightText;

    let social = document.createElement("div");
    social.classList.add("social");
    props.navLinks.forEach((link) => {
        let linklist = document.createElement("li");
        linklist.classList.add("footer-list");
        let linkanchor = document.createElement("a");
        linkanchor.classList.add("footer-anchor");
        let linkicons = document.createElement("i");
        linkicons.classList.add("fab",`${link.className}`,"fa-2x");
        linkanchor.href =link.href;
        linkanchor.appendChild(linkicons);
        linklist.appendChild(linkanchor);
        social.appendChild(linklist);
    })

    footer.appendChild(logoImg);
    footer.appendChild(footertext);
    footer.appendChild(social);
    markup.appendChild(footer);
    return markup;
}