import DataStudents from "../data/studentMockData";

const studentFunRate = [];
const allFunRate = [];

const AllstudentsData = DataStudents.map((element) => element.person_name);

const AllstudentsInList = AllstudentsData.filter(
  (item, index) => AllstudentsData.indexOf(item) === index
);

AllstudentsInList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].person_name === element) {
      studentFunRate.push(parseInt(DataStudents[i].fun_rate));
    };
  };
});

AllstudentsInList.forEach(() => {
  allFunRate.push(
    studentFunRate.splice(0, 56)
  );
});

export default allFunRate;

