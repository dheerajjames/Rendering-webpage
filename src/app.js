import {  NavigationBar } from "./components/navigationBar.js";
import { banner } from "./components/banner.js";
import { footer } from "./components/footer.js";
import { OurTeam } from "./components/ourteam.js"

let rootDiv = document.getElementById("root");
let dataEndpoint = "https://dheerajjames.github.io/json-data/data/data.json";

fetch(dataEndpoint)
.then((response) => {
    return response.json();
})
.then((data) => {
    // console.log(data.navData.logo.imgSrc);
    rootDiv.appendChild(NavigationBar(data.navData));
    rootDiv.appendChild(banner(data.bannerData));
    rootDiv.appendChild(OurTeam(data.ourteamData));
    rootDiv.appendChild(footer(data.footerData));
})