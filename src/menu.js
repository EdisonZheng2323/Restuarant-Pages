function menuPage(){
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");
  body.appendChild(newContent);
  const menu = document.createElement("div");
  menu.classList.add("menu");
  newContent.appendChild(menu);
  const header1 = document.createElement("h1");
  header1.classList.add("menuHeader");
  header1.textContent = "Menu";
  menu.appendChild(header1);
  const header2 = document.createElement("h2");
  header2.textContent = "Drinks";
  menu.appendChild(header2);
  const icedLemonade = document.createElement("div");
  icedLemonade.classList.add("item");
  icedLemonade.innerHTML = "Iced Lemonade \n A cold, refreshing drink with hints of citrus that will certainley quench your thirst!"
  icedLemonade.style.whiteSpace ="pre-line";
  menu.appendChild(icedLemonade);
  const sweetenedIcedTea = document.createElement("div");
  sweetenedIcedTea.classList.add("item");
  sweetenedIcedTea.innerHTML = "Sweetened Ice Tea \n A revitalizingly cold tea that will make your whole body jump and shiver with excitement!"
  sweetenedIcedTea.style.whiteSpace ="pre-line";
  menu.appendChild(sweetenedIcedTea);
  const header3 = document.createElement("h2");
  header3.textContent = "Food";
  menu.appendChild(header3);
  const smokedBrisket = document.createElement("div");
  smokedBrisket.classList.add("item");
  smokedBrisket.innerHTML = "Smoked Brisket \n A fatty piece of meat that will melt in your mouth instantly!"
  smokedBrisket.style.whiteSpace ="pre-line";
  menu.appendChild(smokedBrisket);
  const sausagePoppers = document.createElement("div");
  sausagePoppers.classList.add("item");
  sausagePoppers.innerHTML = "Sausage poppers \n Small pieces of fatty sausage that will burst into tons of flavor as it snaps in your mouth!"
  sausagePoppers.style.whiteSpace ="pre-line";
  menu.appendChild(sausagePoppers);
  const beefRibs = document.createElement("div");
  beefRibs.classList.add("item");
  beefRibs.innerHTML = "Beef Ribs \n A rack of ribs that is smuthered with barbecue sauce and will easily fall off the bone!"
  beefRibs.style.whiteSpace ="pre-line";
  menu.appendChild(beefRibs);
}

export {menuPage};