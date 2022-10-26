import React from 'react';
import { TaskListWrapper } from "./styles";
import ListItem from 'components/ListItem/ListItem';

function TasksList({tasks, isCheckTasksActive}) {
    if (!tasks) return null;
    return (
        <TaskListWrapper>
          {tasks.map(task => <ListItem key={task} taskToDo={task} {...{ isCheckTasksActive }}/>)}
        </TaskListWrapper>
    );
}

export default TasksList;