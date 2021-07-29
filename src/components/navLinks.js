



export const NavLinks = (props) => {   
    let markup = document.createElement('ul');
    markup.classList.add("nav-container");
    props.forEach((link) => {
        let navItem = document.createElement('li');
        navItem.classList.add("nav-item");
        let navLink = document.createElement('a');
        link.isCta 
        ? navLink.classList.add("nav-link", "btn") 
        : navLink.classList.add("nav-link");  
        navLink.href = link.href;
        navLink.innerText = link.title;

        navItem.appendChild(navLink);

        markup.appendChild(navItem);
    });
 return markup;
};