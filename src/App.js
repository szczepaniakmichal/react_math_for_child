import Div from 'styled-kit/Div';

import 'App.css';
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";
import { useEffect, useState } from "react";

var stringMath = require('string-math');

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

useEffect(() => {
    const btnCheckAllTask = document.querySelector('.btn-check-task');

    function removeChild(nodeParent) {
        while (nodeParent.firstChild) {
            nodeParent.removeChild(nodeParent.firstChild)
        }
    }

    function getMathOperation() {
        const mathOperationArray = [];
        [...document.querySelectorAll('.math-operation input')].filter(mathOperation => (mathOperation.checked ? mathOperationArray.push(mathOperation.value) : null));
        return mathOperationArray;
    }

    function addTask(howManyTask, nodeParent, child, howManyValue, toValue) {
        const mathOperators = getMathOperation();

        for (let i = 0; i < howManyTask; i++) {
            const task = document.createElement(child);
            task.classList.add('task-list__item');
            const numberValue = [];

            for (let j = 0; j < howManyValue; j++) {
                const number = Math.floor(Math.random() * toValue + 1);
                numberValue.push(number);
            }

            // generate every numbers in <span>
            const matchTask = numberValue.map((number, index) => {
                const randomMathOperator = mathOperators[Math.floor(Math.random() * mathOperators.length)] || '+';
                return (
                    `<span class="number">${number}</span>
                    ${index === numberValue.length - 1 ? '<span> = </span>' : `<span>${randomMathOperator} </span>`}
                    `
                )
            })

            task.innerHTML = `
        <span class="oneTask--js">${matchTask.join('')}</span>
        <span class="oneTask__result>
            <label for="result${i}"></label>
            <input type="number" class="task-list__result" id="result${i}">
        </span>
        `;
            nodeParent.appendChild(task);
        }
    }

    function clearClass(elements, nameClass) {
        elements.forEach(el => el.classList.remove(nameClass));
    }

    function focusTask() {
        const taskListItem = document.querySelectorAll('.task-list__item');
        const taskListResult = document.querySelectorAll('.task-list__result');
        taskListResult.forEach(input => {
           input.addEventListener('focus', () => {
               clearClass(taskListItem, 'focus')
               input.closest('.task-list__item').classList.add('focus');
           })
        })
    }

    function generateTask() {
        const howManyTask = Number(document.querySelector(".how-many-task").value);
        const howManyValue = Number(document.querySelector(".how-many-value").value);
        const toValue = Number(document.querySelector(".to-value").value);
        const taskList = document.querySelector('.task-list');
        if (taskList.hasChildNodes() && window.confirm("You have tasks to do. Do You want create new tasks?") === false) return;
        removeChild(taskList);
        getMathOperation();
        addTask(howManyTask, taskList, 'li', howManyValue, toValue);
        focusTask();
    }

    function checkAllTask() {
        const allTask = [...document.querySelectorAll(".task-list__item")];

        allTask.forEach(task => {
            const oneTask = task.querySelector('.oneTask--js');
            const allNumbers = [...oneTask.querySelectorAll('span')].map(span => parseInt(span.textContent) ? parseInt(span.textContent) : span.textContent);
            const answerInput = task.querySelector('.task-list__result');
            const userAnswer = parseFloat(answerInput.value);
            const resultText = task.querySelector('.result-text');

            if (resultText) {
                task.removeChild(resultText);
            }

            if (answerInput.value.length <= 0) {
                answerInput.classList.remove('in-correct');
                answerInput.classList.remove('correct')
                return answerInput.setAttribute("placeholder", "complete the result")
            }

            const correctAnswer = document.createElement('span');
            correctAnswer.classList.add('result-text');
            correctAnswer.classList.add('correct-answer');
            correctAnswer.textContent = 'Super, to poprawny wynik :)';

            const inCorrectAnswer = document.createElement('span');
            inCorrectAnswer.classList.add('result-text');
            inCorrectAnswer.classList.add('in-correct-answer');
            inCorrectAnswer.textContent = 'Upsss... spróbuj jeszcze raz';

            let counter = Number(stringMath(allNumbers.slice(0, -1).join('')).toFixed(2));

            if (counter === userAnswer) {
                answerInput.classList.add('correct');
                answerInput.classList.remove('in-correct');
                task.appendChild(correctAnswer);
            } else {
                answerInput.classList.add('in-correct');
                answerInput.classList.remove('correct')
                task.appendChild(inCorrectAnswer);
            }
        })
    }

    function test() {
        const generateBtn = document.querySelector('.btn-generate-task-js');
        generateBtn.addEventListener('click', generateTask);
        // generateBtn.click();
    }


    btnCheckAllTask.addEventListener('click', checkAllTask);

    test();
}, [])

    return (
    <Div padding={20} column>
        <Div column>
            <InputField title="how many tasks?" className="how-many-task" value={howManyTasks} onChange={handleHowManyTasks}/>
            <InputField title="how many values to calculate?" className="how-many-value" value={howManyValues} onChange={handleHowManyValues}/>
            <InputField title="maximum single value?" className="to-value" value={maximumSingleValue} onChange={handleMaximumSingleValue}/>
        </Div>
        <Div column>
            <p>Type of mathematical operations:</p>
            <InputMathOperators type='addition' value='+'/>
            <InputMathOperators type='subtraction' value='-'/>
            <InputMathOperators type='multiplication' value='*'/>
            <InputMathOperators type='division' value='/'/>
        </Div>
        <Div column>
            <Button label='generate task'
                    isBolder
                    className="btn-generate-task-js"
            />
            <ul className="task-list" />
            <Button label='check task'
                    className='btn-check-task'
            />
        </Div>
        <Button
            onClick={goBackToTop}
            label='back to top'
            className='btn-go-up'
            sticky
        />
    </Div>
  );
}

export default App;
