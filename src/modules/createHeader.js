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
export default createHeader;
