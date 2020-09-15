import createEducation from "./createEducation";

function createEductionList(data) {
  const education = document.getElementById("education");
  const title = document.createElement("h3");
  title.innerText = "EDUCATION";
  education.appendChild(title);
  data.forEach((item) => {
    education.appendChild(createEducation(item));
  });
}
export default createEductionList;
