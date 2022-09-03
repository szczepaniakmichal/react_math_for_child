import React from 'react';
import { TaskListWrapper } from "./styles";
import ListItem from 'components/ListItem/ListItem'

function TasksList() {
    return (
        <TaskListWrapper>
            <ListItem taskToDo='2 + 9 =' />
        </TaskListWrapper>
    );
}

export default TasksList;