import axios from "axios";

async function getUsersData(id) {
  const response = await axios.get(`http://localhost:8080/users/${id}`);
  return response.data;
}
export default getUsersData;
