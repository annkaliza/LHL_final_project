import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form'

import './style.css';
import { AppContext } from './../../../libs/contextLib';

export default function MilestoneForm(props) {
  const [milestone, setMilestone] = useState(props.milestone || '');
  const [deadline, setDeadline] = useState(props.deadline || '');
  const context = useContext(AppContext);

  const resetForm = () => {
    setMilestone('');
    setDeadline('');
  };

  const handleMilestoneCreation = async () => {
    if (milestone && deadline) {
      const userId = localStorage.getItem('userId');
      const goalId = props.goalId;

      try {
        const res = await axios.post('http://localhost:3005/api/v1/milestone', {
          userId,
          milestone,
          deadline,
          goalId,
        });

        context.dispatch({
          type: 'ADD-MILESTONE',
          milestone: res.data.milestone,
        });

        toast.success(res.data.message);

        resetForm();
      } catch (err) {
        if (err.response.data.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Could not create milestone');
        }
      }
    }
  };

  return (
    <main className='milestone_item'>
      <section>
      <Form>
        <Form.Group controlId="Milestone">
          <Form.Control
            value={milestone}
            type='text'
            placeholder='Enter Milestone'
            onChange={(event) => setMilestone(event.target.value)}
          />
          </Form.Group>
{/*          <input
            value={deadline}
            type='text'
            placeholder='deadline'
            onChange={(event) => setDeadline(event.target.value)}
          />
          <DatePicker selected={deadline} placeholderText="Click to select a date" onChange={date => setDeadline(date)} />
          */}
          <Form.Group controlId="Deadline">
          <Form.Control
            value={deadline}
            type='date'
            placeholder='Enter Deadline'
            onChange={(event) => setDeadline(event.target.value)}
          />
          
          </Form.Group>
        </Form>
        <br />
      </section>
      <section>
        <section>
          <Button
            variant='outline-dark'
            onClick={() => {
              handleMilestoneCreation();
            }}
          >
            Add
          </Button>
        </section>
      </section>
    </main>
  );
}
