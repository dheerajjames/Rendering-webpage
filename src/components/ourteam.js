{/* <div class="card">
				<div class="card-image">
				  <img src="./images/blog.png">
				  <span class="card-title">Blog Markup</span>
				</div>
				<div class="card-action">
				  <a href="https://dheerajjames.github.io/Training/blog/" target="_blank">Live Demo</a>
				  <a href="https://github.com/dheerajjames/Training/tree/main/blog" target="_blank">GitHub Repo</a>
				</div>
		  </div> */}


          export const OurTeam = (props) => {
            let markup = document.createElement('div');
            let mainContent = document.createElement('div');
            let teamHeading = document.createElement('h2');
            teamHeading.classList.add("team-heading");
            teamHeading.innerText = props.ourteamHeading;
            mainContent.classList.add("main-content");
            markup.appendChild(teamHeading);
            props.teamInfo.forEach((links)=>{
                let card = document.createElement('div');
                card.classList.add("card");
                let imageCard = document.createElement('div');
                // imageCard.classList.add("");
                let image = document.createElement('img');
                let name = document.createElement('h3');
                name.innerText = links.memberName;
                image.src = links.memberImage;

                imageCard.appendChild(image);
                imageCard.appendChild(name);
                card.appendChild(imageCard);
                mainContent.appendChild(card);
                markup.appendChild(mainContent);
            })
            return markup;
          } 