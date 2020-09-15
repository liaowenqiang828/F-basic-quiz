import axios from "axios";

async function getEducationData() {
  const response = await axios.get("http://localhost:8080/users/1/educations");
  return response.data;
}
export default getEducationData;
