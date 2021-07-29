// import { navData } from "../data/data.js";
import {logo} from "./logo.js";
import {NavLinks} from "./navLinks.js"


export const NavigationBar = (navData) => {
    const markup = document.createElement("div");
    markup.classList.add ("navigation");

    markup.appendChild(logo(navData.logo));
    markup.appendChild(NavLinks(navData.navLinks));

    return markup;
}