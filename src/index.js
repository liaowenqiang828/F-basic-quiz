import "./style/index.scss";
import axios from "axios";

async function getUsersData() {
  const response = await axios.get("http://localhost:8080/users/1");
  return response.data;
}

async function getEducationData() {
  const response = await axios.get("http://localhost:8080/users/1/educations");
  return response.data;
}

function createHeader(data) {
  const header = document.getElementById("header");

  const avatar = document.createElement("img");
  avatar.src = data.avatar;
  avatar.setAttribute("class", "header-avatar");
  const hello = document.createElement("span");
  hello.innerText = "Hello,";
  hello.setAttribute("class", "header-hello");
  const profile = document.createElement("span");
  profile.innerText = `MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`;
  profile.setAttribute("class", "header-profile");

  header.appendChild(avatar);
  header.appendChild(hello);
  header.appendChild(profile);
}

function createDescription(data) {
  const aboutMe = document.getElementById("about-me");

  const title = document.createElement("h3");
  title.innerText = "ABOUT ME";
  const description = document.createElement("p");
  description.innerText = data.description;

  aboutMe.appendChild(title);
  aboutMe.appendChild(description);
}

function createEducation(data) {
  const education = document.createElement("li");
  education.innerHTML = `
        <span>${data.year}</span>
        <div class="description-item">
          <h4>${data.title}</h4>
          <p>${data.description}</p>
        </div>`;
  education.setAttribute("class", "education-item");
  return education;
}

function createEductionList(data) {
  const education = document.getElementById("education");
  const title = document.createElement("h3");
  title.innerText = "EDUCATION";
  education.appendChild(title);
  data.forEach((item) => {
    education.appendChild(createEducation(item));
  });
}

const startUp = () => {
  getUsersData().then((data) => {
    createHeader(data);
    createDescription(data);
  });
  getEducationData().then((data) => {
    createEductionList(data);
  });
};

startUp();
