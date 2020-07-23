import React, { Component } from "react";
import WincThema from "../data/WincTheme";
import Assigments from "../data/assignmentRatingAverage";
import StudentDifficultyRate from "../chartData/StudentDifficultyRate";
import StudentFunRate from "../chartData/StudentFunRate";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTooltip,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
} from "victory";

const wincTheme = WincThema;
const allDifficulty = StudentDifficultyRate;
const allFun = StudentFunRate;
let assignmentRatingAverage = Assigments; 

const getDifficultyWietske = () => allDifficulty[9].splice(0, 1);
const getFunWietske = () => allFun[9].splice(0, 1);

assignmentRatingAverage = assignmentRatingAverage.map((avg) => ({
  assignment: avg.assignment,
  difficultyRating: getDifficultyWietske()[0],
  enjoymentRating: getFunWietske()[0],
}));

const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(
  (avg) => ({
    assignment: avg.assignment,
    difficultyRating: avg.difficultyRating,
    enjoymentRating: avg.enjoymentRating,
    label: `Opdracht ${avg.assignment}, 
    difficultyRating: ${avg.difficultyRating.toFixed(1)}, 
    enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`,
  })
);

class Wietske extends Component {
state = {
      difficult: {
        data: { visibility: "visible" },
      },
      fun: {
        data: { visibility: "visible" },
      },
    };

  render() {
    const filterDifficulty = (event) => {
      if (event.target.checked) {
        this.setState({ difficult: { data: { visibility: "visible" } } });
      } else {
        this.setState({ difficult: { data: { visibility: "hidden" } } });
      }
    };

    const filterFun = (event) => {
      if (event.target.checked) {
        this.setState({ fun: { data: { visibility: "visible" } } });
      } else {
        this.setState({ fun: { data: { visibility: "hidden" } } });
      }
    };

    return (
      <div className="chart">
        <h2>Wietske</h2>
        <figure>
          <label>
            <input
              type="checkbox"
              onClick={filterDifficulty}
              name="filter"
              value="difficult"
              defaultChecked
            />
            Difficulty
          </label>
          <label>
            <input
              type="checkbox"
              onClick={filterFun}
              name="filter"
              value="fun"
              defaultChecked
            />
            Fun
          </label>
          <VictoryChart
            height={300}
            width={800}
            domainPadding={15}
            theme={wincTheme}
            padding={{ bottom: 150, left: 60, right: 120, top: 50 }}
            fontSize={20}
          >
            <VictoryLegend
              x={260}
              y={0}
              title="Legend"
              centerTitle
              orientation="horizontal"
              style={{ border: { stroke: "black" }, title: { fontSize: 12 } }}
              data={[{ name: "Difficulty" }, { name: "Fun " }]}
            />

            <VictoryGroup offset={3}>
              <VictoryBar
                style={this.state.difficult}
                labelComponent={<VictoryTooltip />}
                data={assignmentRatingAverageWithLabels}
                x="assignment"
                y="difficultyRating"
                tickFormat={assignmentRatingAverageWithLabels.map(
                  (avg) => avg.assignment
                )}
                animate={({ duration: 800 }, { easing: "sinIn" })}
              />

              <VictoryBar
                style={this.state.fun}
                labelComponent={<VictoryTooltip />}
                data={assignmentRatingAverageWithLabels}
                x="assignment"
                y="enjoymentRating"
                tickFormat={assignmentRatingAverageWithLabels.map(
                  (avg) => avg.assignment
                )}
                alignment="start"
                animate={({ duration: 1000 }, { easing: "sinIn" })}
                padding={{ left: -160 }}
                margin={{ left: -160 }}
              />
            </VictoryGroup>
            <VictoryAxis
              tickFormat={assignmentRatingAverageWithLabels.map(
                (avg) => avg.assignment
              )}
              style={{ tickLabels: { fontSize: 6 } }}
              tickLabelComponent={
                <VictoryLabel angle={40} textAnchor="start" />
              }
            />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </figure>
      </div>
    );
  }
}

export default Wietske;
