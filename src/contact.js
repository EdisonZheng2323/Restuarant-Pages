function contactPage(){
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  body.removeChild(content);
  const newContent = document.createElement("div");
  newContent.setAttribute("id", "content");
  body.appendChild(newContent);
  const contact = document.createElement("div");
  contact.classList.add("contact");
  newContent.appendChild(contact);
  const header1 = document.createElement("h1");
  header1.textContent = "Contact Us";
  header1.classList.add("person");
  contact.appendChild(header1);
  const contact1 = document.createElement("div");
  contact1.classList.add("person");
  contact1.innerHTML = "Stanley \n Owner \n 123-123-1234 \n 1234@gmail.com"
  contact1.style.whiteSpace ="pre-line";
  contact.appendChild(contact1);
  const contact2 = document.createElement("div");
  contact2.classList.add("person");
  contact2.innerHTML = "Sean \n Head Chef \n 123-123-1235 \n 1235@gmail.com"
  contact2.style.whiteSpace ="pre-line";
  contact.appendChild(contact2);
  const contact3 = document.createElement("div");
  contact3.classList.add("person");
  contact3.innerHTML = "Steven \n Chef \n 123-123-1236 \n 1236@gmail.com"
  contact3.style.whiteSpace ="pre-line";
  contact.appendChild(contact3);
  const contact4 = document.createElement("div");
  contact4.classList.add("person");
  contact4.innerHTML = "Sam \n Waiter \n 123-123-1237 \n 1237@gmail.com"
  contact4.style.whiteSpace ="pre-line";
  contact.appendChild(contact4);
  const contact5 = document.createElement("div");
  contact5.classList.add("person");
  contact5.innerHTML = "Sally \n Waitress \n 123-123-1238 \n 1238@gmail.com"
  contact5.style.whiteSpace ="pre-line";
  contact.appendChild(contact5);
}

export {contactPage};