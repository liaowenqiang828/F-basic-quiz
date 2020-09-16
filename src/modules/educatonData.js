import axios from "axios";

async function getEducationData(id) {
  const response = await axios.get(
    `http://localhost:8080/users/${id}/educations`
  );
  return response.data;
}
export default getEducationData;
