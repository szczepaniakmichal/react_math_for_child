import React from 'react';
import { TaskListWrapper } from "./styles";
import ListItem from 'components/ListItem/ListItem';

function TasksList({tasks, isCheckTasksActive}) {
    if (!tasks) return null;
    return (
        <TaskListWrapper>
            {tasks.map((task, index) => <ListItem key={task} taskToDo={task} {...{isCheckTasksActive, index}}/>)}
        </TaskListWrapper>
    );
}

export default TasksList;