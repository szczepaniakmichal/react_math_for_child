import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Div from 'styled-kit/Div';
import isEqual from 'lodash.isequal';

import 'App.css';
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";
import { GroupButtonWrapper } from "components/Button/styles";
import TasksList from "components/TasksList/TasksList";
import Header from "components/Header/Header";
import { createTasks, calculateCorrectDone } from "utils";
import Statistics from "./components/Statistics/Statistics";
import { generateTasksReducer } from "./components/TasksList/taskListSlice";
import { updateChecks, resetChecks, updateCorrectDone } from "components/Statistics/statisticsSlice";
import { BottomSection, SectionWrapper } from "./styles";

function App() {
    const dispatch = useDispatch();

    const taskList = useSelector(({taskList}) => ({ tasks: taskList.tasks }), isEqual);

    const [howManyTasks, setHowManyTasks] = useState(5);
    const [howManyValues, setHowManyValues] = useState(2);
    const [maximumSingleValue, setMaximumSingleValue] = useState(10);
    const [typeOfMathOperators, setTypeOfMathOperators] = useState([]);
    const [isCheckTasksActive, setIsCheckTasksActive] = useState(false);

    const handleHowManyTasks = (e) => setHowManyTasks(e.target.value);

    const handleHowManyValues = (e) => setHowManyValues(e.target.value);

    const handleMaximumSingleValue = (e) => setMaximumSingleValue(e.target.value);

    const generateTasks = () => {
        const newTask = createTasks({
            howManyTasks,
            howManyValues,
            maximumSingleValue,
            typeOfMathOperators
        })
        dispatch(generateTasksReducer(newTask))
    }

    const handleGenerateTasks = () => {
        if (taskList.tasks.length) {
            const answer = window.confirm("Got a list, want to create a new one?");
          if (answer) {
              generateTasks();
              dispatch(resetChecks(0))
          }
          return null;
        }
        return generateTasks();
    };

    const handleCheckTask = () => {
        setIsCheckTasksActive(!isCheckTasksActive);
        if (!isCheckTasksActive && taskList.tasks.length) {
            dispatch(updateChecks())
          dispatch(updateCorrectDone(calculateCorrectDone(taskList.tasks)))
        }
    };

    const handleMathOperatorChange = (e) => {
        const mathOperator = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setTypeOfMathOperators([...typeOfMathOperators, mathOperator])
        } else {
            const newArr = typeOfMathOperators.filter(el => el !== mathOperator)
            setTypeOfMathOperators(newArr);
        }
    }

    const goBackToTop = () => window.scroll({top: 0, behavior: 'smooth'});

    return (
        <Div padding={20} column>
            <SectionWrapper column>
                <Header title="Settings"/>
                <InputField title="how many tasks?" value={howManyTasks} onChange={handleHowManyTasks} max={100} />
                <InputField title="how many values to calculate?" value={howManyValues} onChange={handleHowManyValues} max={5} min={2}/>
                <InputField title="maximum single value?" value={maximumSingleValue}
                            onChange={handleMaximumSingleValue}
                            max={10000}/>
            </SectionWrapper>
            <SectionWrapper column>
                <Header title="Type of mathematical operations"/>
                <InputMathOperators type='addition' value='+' onChange={handleMathOperatorChange}/>
                <InputMathOperators type='subtraction' value='-' onChange={handleMathOperatorChange}/>
                <InputMathOperators type='multiplication' value='*' onChange={handleMathOperatorChange}/>
                <InputMathOperators type='division' value='/' onChange={handleMathOperatorChange}/>
            </SectionWrapper>
            <SectionWrapper>
                <Button label='generate task'
                        backgroundColor='silver'
                        onClick={handleGenerateTasks}
                />
            </SectionWrapper>

            <SectionWrapper>
                <TasksList {...{isCheckTasksActive}} tasks={taskList.tasks} />
            </SectionWrapper>

            <BottomSection>
                {isCheckTasksActive && <Statistics />}
                <GroupButtonWrapper >
                    <Button label={isCheckTasksActive ? 'go to edit task' : 'check task'}
                            backgroundColor='silver'
                            onClick={handleCheckTask}
                    />
                    <Button
                        onClick={goBackToTop}
                        label='back to top'
                        backgroundColor='silver'
                    />
                </GroupButtonWrapper>
            </BottomSection>
        </Div>
    );
}

export default App;
