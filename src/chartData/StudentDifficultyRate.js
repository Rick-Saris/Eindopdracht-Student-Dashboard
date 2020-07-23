import DataStudents from "../data/studentMockData";

const AllstudentsData = DataStudents.map((element) => element.username);
const AllstudentsInList = AllstudentsData.filter(
  (item, index) => AllstudentsData.indexOf(item) === index
);