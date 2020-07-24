import DataStudents from "../data/studentMockData";

const FunRate = [];
const allFunRate = [];
let averageFunRate = [];

const allAssignments = DataStudents.map((element) => element.assignment_name);

const allAssignmentList = allAssignments.filter(
  (item, index) => allAssignments.indexOf(item) === index
);

allAssignmentList.forEach((element) => {
  for (let i = 0; i < DataStudents.length; i++) {
    if (DataStudents[i].assignment_name === element) {
      FunRate.push(parseInt(DataStudents[i].fun_rate));
    };
  };
});

allAssignmentList.forEach(() => {
  allFunRate.push(FunRate.splice(0, 10));
});
for (let i = 0; i < allFunRate.length; i++) {
  let totalFunRate = allFunRate[i].reduce(
    (acc, element) => (acc, element) + acc
  );
  let averageFunRateX = totalFunRate / 10;
  averageFunRate.push(averageFunRateX);
};

export default averageFunRate;