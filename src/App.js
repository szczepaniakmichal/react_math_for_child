import Div from 'styled-kit/Div';

import 'App.css';
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";
import { useState } from "react";
import { GroupButtonWrapper } from "./components/Button/styles";
import TasksList from "./components/TasksList/TasksList";
import Header from "./components/Header/Header";

function App() {
    const [howManyTasks, setHowManyTasks ] = useState(10)
    const [howManyValues, setHowManyValues ] = useState(2)
    const [maximumSingleValue, setMaximumSingleValue ] = useState(50)

    const handleHowManyTasks = (e) => {
        setHowManyTasks(e.target.value)
    }

    const handleHowManyValues = (e) => {
        setHowManyValues(e.target.value)
    }

    const handleMaximumSingleValue = (e) => {
        setMaximumSingleValue(e.target.value)
    }

    const goBackToTop = () => window.scroll({top: 0, behavior: 'smooth'});

    return (
    <Div padding={20} column>
        <Div column>
            <Header title="Settings"/>
            <InputField title="how many tasks?" value={howManyTasks} onChange={handleHowManyTasks}/>
            <InputField title="how many values to calculate?" value={howManyValues} onChange={handleHowManyValues}/>
            <InputField title="maximum single value?" value={maximumSingleValue} onChange={handleMaximumSingleValue}/>
        </Div>
        <Div column>
            <Header title="Type of mathematical operations"/>
            <InputMathOperators type='addition' value='+'/>
            <InputMathOperators type='subtraction' value='-'/>
            <InputMathOperators type='multiplication' value='*'/>
            <InputMathOperators type='division' value='/'/>
        </Div>
        <Div column>
            <Button label='generate task'
                    backgroundColor='silver'
            />
        </Div>

        <TasksList>

        </TasksList>

        <GroupButtonWrapper style={{position: 'sticky', bottom: 0}}>
            <Button label='check task'
                    backgroundColor='silver'
            />
            <Button
                onClick={goBackToTop}
                label='back to top'
                backgroundColor='silver'
            />
        </GroupButtonWrapper>

    </Div>
  );
}

export default App;
