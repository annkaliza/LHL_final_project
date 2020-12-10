import { React, useState } from 'react';
import MilestoneListItem from './MilestoneListItem';
import MilestoneForm from './MilestoneForm';
import './style.css';

export default function MilestoneList(props) {
  const milestoneList = props.milestones.map((milestone, index) => {
    return (
      <div>
        <ul className='milestoneList' key={milestone.id}>
          <MilestoneListItem
            id={milestone.id}
            milestone={milestone.milestone}
            deadline={milestone.deadline}
            completed={milestone.completed}
            completeMilestone={() => props.completeMilestone(milestone.id)}
            cancelMilestone={() => props.cancelMilestone(milestone.id)}
          />
        </ul>
      </div>
    );
  });

  return <section>{milestoneList}</section>;
}
