import Div from 'styled-kit/Div';

import 'App.css';
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";
import { useState } from "react";
import { GroupButtonWrapper } from "components/Button/styles";
import TasksList from "components/TasksList/TasksList";
import Header from "components/Header/Header";
import { createTasks } from "utils/createTasks";
import InformationAboutResult from "./components/InformationAboutResult/InformationAboutResult";
import { BottomSection } from "./styles";

function App() {
    const [howManyTasks, setHowManyTasks] = useState(30);
    const [howManyValues, setHowManyValues] = useState(2);
    const [maximumSingleValue, setMaximumSingleValue] = useState(10);
    const [typeOfMathOperators, setTypeOfMathOperators] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [isCheckTasksActive, setisCheckTasksActive] = useState(false);
    const [numberOfCorrectResults, setNumberOfCorrectResults] = useState(0)

    const handleHowManyTasks = (e) => setHowManyTasks(e.target.value);

    const handleHowManyValues = (e) => setHowManyValues(e.target.value);

    const handleMaximumSingleValue = (e) => setMaximumSingleValue(e.target.value);

    const handleGenerateTasks = () => {
        if (tasks.length) {
            const answer = window.confirm("Got a list, want to create a new one?");
           if (answer) {
               setTasks(createTasks({
                   howManyTasks,
                   howManyValues,
                   maximumSingleValue,
                   typeOfMathOperators
               }))
           }
        }
        return null;
    };

    const handleCheckTask = () => setisCheckTasksActive(!isCheckTasksActive);

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
            <Div column>
                <Header title="Settings"/>
                <InputField title="how many tasks?" value={howManyTasks} onChange={handleHowManyTasks}/>
                <InputField title="how many values to calculate?" value={howManyValues} onChange={handleHowManyValues}/>
                <InputField title="maximum single value?" value={maximumSingleValue}
                            onChange={handleMaximumSingleValue}/>
            </Div>
            <Div column>
                <Header title="Type of mathematical operations"/>
                <InputMathOperators type='addition' value='+' onChange={handleMathOperatorChange}/>
                <InputMathOperators type='subtraction' value='-' onChange={handleMathOperatorChange}/>
                <InputMathOperators type='multiplication' value='*' onChange={handleMathOperatorChange}/>
                <InputMathOperators type='division' value='/' onChange={handleMathOperatorChange}/>
            </Div>
            <Div column>
                <Button label='generate task'
                        backgroundColor='silver'
                        onClick={handleGenerateTasks}
                />
            </Div>

            <TasksList {...{tasks, isCheckTasksActive, setNumberOfCorrectResults}} />

            <BottomSection>
                {isCheckTasksActive && <InformationAboutResult {...{numberOfCorrectResults}}/>}
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
