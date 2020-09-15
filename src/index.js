import "./style/index.scss";

const startUp = () => {
    getData()
        .then(data => {
            createHeader(data);
            createDescription(data);
        });
}
startUp();

async function getData() {
    const response = await fetch("http://localhost:3333/users");
    const data = await response.json();
    await console.log(data[0]);
    return data[0];
}

function createHeader(data) {
    const header = document.getElementById("header");

    let avatar = document.createElement("img");
    avatar.src = data.avatar;
    avatar.setAttribute("classname", "header-avatar");
    let hello = document.createElement("span");
    hello.innerText = "Hello,";
    hello.setAttribute("classname", "header-hello");
    let profile = document.createElement("span");
    profile.innerText = `MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME/CV`;
    profile.setAttribute("classname", "header-profile");

    header.appendChild(avatar);
    header.appendChild(hello);
    header.appendChild(profile);
}

function createDescription(data) {
    const aboutMe = document.getElementById("about-me");

    let title = document.createElement("h3");
    title.innerText = "ABOUT ME";
    let description = document.createElement("p");
    description.innerText = data.description;

    aboutMe.appendChild(title);
    aboutMe.appendChild(description);
}
