import DataStudents from "../data/studentMockData";

const studentDifficultyRate = [];
const allDifficultyRate = [];

const AllstudentsData = DataStudents.map((element) => element.person_name);

const AllstudentsInList = AllstudentsData.filter(
  (item, index) => AllstudentsData.indexOf(item) === index
);

AllstudentsInList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].person_name === element) {
      studentDifficultyRate.push(parseInt(DataStudents[i].difficulty_rate));
    };
  };
});

AllstudentsInList.forEach(() => {
  allDifficultyRate.push(studentDifficultyRate.splice(0, 56));
});

export default allDifficultyRate;
