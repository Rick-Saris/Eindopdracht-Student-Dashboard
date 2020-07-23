import DataStudents from "../data/studentMockData";

const allAssignments = DataStudents.map((element) => element.assignment);

const allAssignmentList = allAssignments.filter(
  (item, index) => allAssignments.indexOf(item) === index
);