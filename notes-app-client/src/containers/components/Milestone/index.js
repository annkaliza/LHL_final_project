import { React, useState } from 'react';
import MilestoneForm from './MilestoneForm';
import MilestoneList from './MilestoneList';
import './style.css';


const axios = require('axios').default;

export default function Milestone(props) {
  // const [milestones, setMilestones] = useState(props.milestones);

  function getMilestonesForGoal(goals, milestones, goal) {
    if (Array.isArray(goals) && goals.length === 0) {
      return goals;
    } else if (!goal) {
      return [];
    } else {
      let milestonesForGoal = [];

      milestones.forEach((milestone) => {
        if (milestone.goal_id === goal) {
          milestonesForGoal.push(milestone);
        }
      });

      return milestonesForGoal;
    }
  }

  const goalMilestones = getMilestonesForGoal(
    props.goals,
    props.milestones,
    props.goal
  );

  const completeMilestone = (id) => {
    // const findItem = (item) => item.id === id;
    // const index = milestones.findIndex(findItem);
    // const newMilestones = [...milestones];
    // newMilestones[index].completed_at = new Date();
    // return axios
    //   .put(
    //     `http://localhost:3005/api/v1/milestone?userId=${localStorage.getItem(
    //       'userId'
    //     )}/${id}`,
    //     newMilestones[index]
    //   )
    //   .then((res) => {
    //     // console.log(res);
    //     //const resObj=JSON.parse(res.config.data);
    //     //const newMilestones = [...milestones, resObj];
    //     //setMilestones(newMilestones);
    //   });
  };

  return (
    <div className='milestone'>
      <section className='milestone-list'>
        <h5>Milestone</h5>
        <MilestoneForm goalId={props.goal} />
        <MilestoneList
          milestones={goalMilestones}
          completeMilestone={completeMilestone}
        />
      </section>
    </div>
  );
}
