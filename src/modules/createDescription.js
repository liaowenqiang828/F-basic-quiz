function createDescription(data) {
  const aboutMe = document.getElementById("about-me");

  const title = document.createElement("h3");
  title.innerText = "ABOUT ME";
  const description = document.createElement("p");
  description.innerText = data.description;

  aboutMe.appendChild(title);
  aboutMe.appendChild(description);
}
export default createDescription;
