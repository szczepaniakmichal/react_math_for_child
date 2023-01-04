import React from 'react';
import { TaskListWrapper } from "./styles";
import ListItem from 'components/ListItem/ListItem';

function TasksList({tasks, isCheckTasksActive}) {
    if (!tasks) return null;

    return (
        <TaskListWrapper {...{isCheckTasksActive}}>
            {tasks.map((taskObj) => {
                const {id, task, correctResult, userAnswer} = taskObj;
                return <ListItem key={id} taskToDo={task} {...{isCheckTasksActive, id, correctResult, userAnswer}} />
            })}
        </TaskListWrapper>
    );
}

export default TasksList;