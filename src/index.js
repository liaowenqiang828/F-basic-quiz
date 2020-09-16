import "./style/index.scss";
import getUsersData from "./modules/userData";
import getEducationData from "./modules/educatonData";
import createDescription from "./modules/createDescription";
import createHeader from "./modules/createHeader";
import createEductionList from "./modules/createEducationList";

const path = window.location.pathname.split("/");
const id = path[2];

getUsersData(id).then((data) => {
  createHeader(data);
  createDescription(data);
});

getEducationData(id).then((data) => {
  createEductionList(data);
});
