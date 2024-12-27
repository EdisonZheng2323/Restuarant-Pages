function homePage(){
    const body = document.querySelector("body");
    const content = document.querySelector("#content");
    body.removeChild(content);
    const newContent = document.createElement("div");
    newContent.setAttribute("id", "content");
    body.appendChild(newContent);
    const home = document.createElement("div");
    home.classList.add("home");
    newContent.appendChild(home);
    const header = document.createElement("h1");
    header.textContent = "Stanley's Smoking Stash";
    home.appendChild(header);
    const description = document.createElement("div");
    description.setAttribute("id", "description");
    description.textContent = "Stanley has the best barbecue in town! Everything is smoked to perfection and is to die for! The owner Stanley is a great guy who wants to make everybody taste good food!";
    home.appendChild(description);
    const hours = document.createElement("div");
    hours.setAttribute("id", "hours");
    hours.innerHTML = "Hours: \n Sunday: 12 A.M. - 12 P.M. \n Monday: 12 A.M. - 10 P.M. \n Tuesday: 12 A.M. - 10 P.M. \n Wednesday: 12 A.M. - 11 P.M. \n Thursday: 12 A.M. - 11 P.M. \n Friday: 12 A.M. - 12 P.M. \n Saturday: 12 A.M. - 12 P.M."
    home.style.whiteSpace = "pre-line";
    home.appendChild(hours);
    const location = document.createElement("div");
    location.setAttribute("id", "location");
    location.innerHTML = "Location: \n 275 Smokey Lane, St. Paul, Minnesota";
    location.style.whiteSpace = "pre-line";
    home.appendChild(location);
}

export {homePage};

