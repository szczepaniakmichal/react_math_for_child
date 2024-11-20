import React from 'react';
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import isEmpty from "lodash.isempty";
import ListItem from 'components/ListItem/ListItem';
import { TaskListWrapper } from "./styles";
import { SectionWrapper } from "styles";

function TasksList() {
    const { tasks } = useSelector(({
                                       taskList,
                                       statistic
                                   }) => ({ tasks: taskList.tasks, }), isEqual);

    if ( isEmpty(tasks) ) return null;

    return (
        <SectionWrapper>
            <TaskListPresenter/>
        </SectionWrapper>
    );
}

export default TasksList;

function TaskListPresenter() {
    const tasks = useSelector(({ taskList }) => taskList.tasks, isEqual);

    return (
        <TaskListWrapper>
            {tasks.map((taskObj) => {
                const {
                    id,
                    task,
                    correctResult,
                    userAnswer,
                    correctDone
                } = taskObj;
                return <ListItem key={id} taskToDo={task} {...{
                    id,
                    correctResult,
                    userAnswer,
                    correctDone
                }} />
            })}
        </TaskListWrapper>
    )
}