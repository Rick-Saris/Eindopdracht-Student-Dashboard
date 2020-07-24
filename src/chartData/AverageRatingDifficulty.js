import DataStudents from "../data/studentMockData";

const difficultyRate = [];
const allDifficultyRate = [];
let difficultyRateInAvarage = [];

const allAssignments = DataStudents.map((element) => element.assignment_name);

const allAssignmentList = allAssignments.filter(
  (item, index) => allAssignments.indexOf(item) === index
);

allAssignmentList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].assignment_name === element) {
      difficultyRate.push(parseInt(DataStudents[i].difficulty_rate));
    };
  };
});

allAssignmentList.forEach(() => {
  allDifficultyRate.push(difficultyRate.splice(0, 10));
});
for (let i = 0; i < allDifficultyRate.length; i++) {
  let totalDifficultyRate = allDifficultyRate[i].reduce(
    (acc, element) => (acc, element) + acc
  );
  let difficultyRateInAvarageX = totalDifficultyRate / 10;
  difficultyRateInAvarage.push(difficultyRateInAvarageX);
};

export default difficultyRateInAvarage;
