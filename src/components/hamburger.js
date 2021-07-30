{
  /* <div class="hamburger-menu">
  <img src="" alt="" />
</div>; */
}
// import { baseLink } from "../data/data.js";
const baseLink = "https://niravkpatel28.github.io/github-image-repository";

export const Hamburger = () => {
  const state = {
    //   this state to check if the hamburger is clicked
    isMenuOpen: false,
  };

  const openMenu = () => {
    state.isMenuOpen = !state.isMenuOpen;

    // selecting the nav container and adding relevant classes to hide
    // or display the container at smaller screens
    let navContainer = document.querySelector(".nav-container");

    if (state.isMenuOpen) {
      // if menu is open replace the icon with a close button
      menuIcon.src = `${baseLink}/webpage/close.png`;
      // add class open-nav to display nav-container
      navContainer.classList.add("open-nav");
    } else {
      // if menu is closed the icon should be menu (hamburger) icon
      menuIcon.src = `${baseLink}/webpage/menu-black.png`;
      // remove class open-nav to hide the nav-container
      navContainer.classList.remove("open-nav");
    }
  };

  const markUp = document.createElement("div");
  markUp.classList.add("hamburger-menu");
  // attach event listener to hide/display nav container
  // and change the icon to close or hamburger
  markUp.addEventListener("click", openMenu);
  const menuIcon = document.createElement("img");

  // intialize menu icon with a hamburger icon
  menuIcon.src = `${baseLink}/webpage/menu-black.png`;

  markUp.appendChild(menuIcon);
  return markUp;
};
