import React from 'react';
import { TaskListWrapper } from "./styles";
import ListItem from 'components/ListItem/ListItem';

function TasksList({tasks, isCheckTasksActive}) {
    if (!tasks) return null;

    return (
        <TaskListWrapper {...{isCheckTasksActive}}>
            {tasks.map((taskObj, index) => {
                const {task} = taskObj;
                return <ListItem key={`${task}_${index}`} taskToDo={task} {...{isCheckTasksActive, index}}/>
            })}
        </TaskListWrapper>
    );
}

export default TasksList;