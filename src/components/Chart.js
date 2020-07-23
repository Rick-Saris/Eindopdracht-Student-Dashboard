import React from "react";
import Assigments from "../data/assignmentRatingAverage";
import WincThema from "../data/WincTheme";
import difficultyRateInAvarage from "../chartData/AverageRatingDifficulty"
import averageFunRates from "../chartData/AverageRatingFun"

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryLine,
  VictoryGroup,
} from "victory";

const wincTheme = WincThema;
let assignmentRatingAverage = Assigments;

const averageDifficulty = difficultyRateInAvarage;
const averageFunRate = averageFunRates;

const getRandomRating = () => Math.random() * 5;
// const getRandomRating = () => 2;

assignmentRatingAverage = assignmentRatingAverage.map((avg) => ({
  assignment: avg.assignment,
  difficultyRating: getRandomRating(),
  enjoymentRating: getRandomRating(),
}));

// Add label
const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(
  (avg) => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht ${
      avg.assignment
    }, difficultyRating: ${avg.difficultyRating.toFixed(
      1
    )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`,
  })
);

const chartExample = () => (
  <>
    <VictoryChart domainPadding={15} theme={wincTheme}>
      <VictoryGroup offset={20}>
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={assignmentRatingAverageWithLabels}
          x="assignment"
          y="difficultyRating"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            (avg) => avg.assignment
          )}
        />
        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={assignmentRatingAverageWithLabels}
          x="assignment"
          y="enjoymentRating"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={assignmentRatingAverageWithLabels.map(
            (avg) => avg.assignment
          )}
        />
      </VictoryGroup>
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={assignmentRatingAverageWithLabels.map(
          (avg) => avg.assignment
        )}
      />
      <VictoryAxis dependentAxis />
    </VictoryChart>
  </>
);
export default chartExample;
