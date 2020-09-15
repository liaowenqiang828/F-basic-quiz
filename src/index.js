import "./style/index.scss";
import getUsersData from "./modules/userData";
import getEducationData from "./modules/educatonData";
import createDescription from "./modules/createDescription";
import createHeader from "./modules/createHeader";
import createEductionList from "./modules/createEducationList";

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
