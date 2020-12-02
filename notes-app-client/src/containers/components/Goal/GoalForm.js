import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import { DatePicker } from 'react-datepicker';

export default function GoalForm(props) {

  const [goal, setGoal] = useState(props.goal || "");
  const [deadline, setDeadline] = useState(props.deadline || "");
  

  function reset(){
    setGoal("");
    setDeadline("");
  };

  return (
    <main className="goal__card">
      <section>
        <form autoComplete="off">
          <input
            value={goal}
            type="text"
            placeholder="Enter Goal"
            onChange={(event) => setGoal(event.target.value)}
          />
          <input
            value={deadline}
            type="text"
            placeholder="deadline"
            onChange={(event) => setDeadline(event.target.value)}
          />
        </form>

      </section>
      <section>
        <section>
        <Button variant="outline-dark" onClick={() => {props.onSave(goal, deadline);reset(); }}>Add</Button>
        </section>
      </section>
    </main>
  );
}