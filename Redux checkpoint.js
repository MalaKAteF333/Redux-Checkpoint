// App.js
import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

function App( {
    return (
        <div>
        <h1>ToDO App</h1>
        <AddTask />
        <ListTask />
        </div>
    );
})

export default App;


// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';

function AddTask() {
    const [description, setDescription] = 
    useState('');
    const dispatch = useDispatch();

};

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter task
        description"
        value={description}
        onChange={(e) =>
        setDescription(e.target.value)} />
        <button type="submit">Add Task</button>
    </form>
);


export default AddTask;


// ListTask.js
import React from 'react',
import { useSelector } from 'react-redux';
import Task from './Task';

function Lia=stTask() {
    const tasks = useSelector ( state =>
        state.tasks),

        return (
            <div>
                <h2>Tasks</h2>
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                )
                    )}
            </div>
        ),
}

export default ListTask;



// Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './redux/actions';

function Task({ task }) {
const [isEditing, setIsEditing] =
useState(false);
const [editedDescription, setEditedDescription]=
useState(task.description);
const dispatch = useDispatch();
const handleToggle = () => {
    dispatch(toggleTask(task.id));
};
};

export default Task;


// redux/action.js
export const ADD_TASK ='ADD_TASK';
export const TOGGLE_TASK ='TOGGLE_TASK';
export const EDIT_TASK ='EDIT_TASK';

export const addTask =(task) => ({
    type: ADD_TASK,
    payload: task,
});

export const toggleTask = (taskId) => ({
    type: TOGGLE_TASK,
    payload: taskId,

});

export const editTask = (taskId,
    newDescription) => ({
        type: EDIT_TASK,
        Payload: { taskId, newDescription},
    });

