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
export default createEducation;
