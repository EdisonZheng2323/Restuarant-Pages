import "./styles.css"
import {homePage} from "./home.js"
import {aboutPage} from "./about.js"
import {menuPage} from "./menu.js"

function displayPages(){
  window.addEventListener("load", () => {
    homePage();
    const homeButton = document.querySelector("#home");
    homeButton.setAttribute("style", "background-color: rgba(205, 46, 46, 0.678);");
  });
  const content = document.querySelector("#content");
  const homeButton = document.querySelector("#home"); 
  const menuButton = document.querySelector("#menu");
  const aboutButton = document.querySelector("#about");
  homeButton.addEventListener("click", function(){
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const menu = document.querySelector(".menu");
    if(content.contains(home)){
      content.removeChild(home);
    }
    if(content.contains(about)){
      content.removeChild(about);
    }
    if(content.contains(menu)){
      content.removeChild(menu);
    }
    homePage();
    homeButton.setAttribute("style", "background-color: rgba(205, 46, 46, 0.678);");
    menuButton.setAttribute("style", "background-color: red;");
    aboutButton.setAttribute("style", "background-color: red;");
  });
}

