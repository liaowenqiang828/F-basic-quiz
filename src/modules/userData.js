import axios from "axios";

async function getUsersData() {
  const response = await axios.get("http://localhost:8080/users/1");
  return response.data;
}
export default getUsersData;
