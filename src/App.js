import { Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Div from 'styled-kit/Div';
import isEqual from 'lodash.isequal';
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import { useTranslation } from 'react-i18next';

import 'App.css';
import Button from "components/Button/Button";
import InputField from "components/InputField/InputField";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";
import { GroupButtonWrapper } from "components/Button/styles";
import TasksList from "components/TasksList/TasksList";
import Header from "components/Header/Header";
import { createTasks, calculateDoneTasks } from "utils";
import Statistics from "components/Statistics/Statistics";
import { generateTasksReducer } from "components/TasksList/taskListSlice";
import {
    updateChecks,
    resetChecks,
    updateCorrectDone,
    updateStartTime,
} from "components/Statistics/statisticsSlice";
import { BottomSection, SectionWrapper } from "styles";
import { en, pl } from 'translations';
import Select from "components/Select/Select";
import { languageOptions } from "translations/options";

i18n.use(initReactI18next).init({
    resources: {
        en: {translation: en},
        pl: {translation: pl},
    },
    lng: 'pl',
    fallbackLng: 'pl',
    interpolation: { escapeValue: false },
})

function App() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const taskList = useSelector(({taskList}) => ({ tasks: taskList.tasks }), isEqual);

    const [howManyTasks, setHowManyTasks] = useState(30);
    const [howManyValues, setHowManyValues] = useState(2);
    const [maximumSingleValue, setMaximumSingleValue] = useState(30);
    const [typeOfMathOperators, setTypeOfMathOperators] = useState([]);
    const [isCheckTasksActive, setIsCheckTasksActive] = useState(false);
    const [isPositiveResults, setIsPositiveResults] = useState(false);

    const handleHowManyTasks = (e) => setHowManyTasks(e.target.value);

    const handleHowManyValues = (e) => setHowManyValues(e.target.value);

    const handleMaximumSingleValue = (e) => setMaximumSingleValue(e.target.value);

    const generateTasks = () => {
        const newTask = createTasks({
            howManyTasks,
            howManyValues,
            maximumSingleValue,
            typeOfMathOperators,
            isPositiveResults,
        })
        dispatch(generateTasksReducer(newTask))
    }

    const handleGenerateTasks = () => {
        if (taskList.tasks.length) {
            const answer = window.confirm("Got a list, want to create a new one?");
          if (answer) {
              generateTasks();
              dispatch(resetChecks(0))
              setIsCheckTasksActive(false);
          }
          return null;
        }
        dispatch(updateStartTime(new Date().getTime()));
        return generateTasks();
    };

    const handleCheckTask = () => {
        setIsCheckTasksActive(isCheckTasksActive => !isCheckTasksActive);
        if (!isCheckTasksActive && taskList.tasks.length) {
            dispatch(updateChecks());
            dispatch(updateCorrectDone(calculateDoneTasks(taskList.tasks)));
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
        if (mathOperator === '-') setIsPositiveResults(false);
    }

    const handlePositiveResultsChange = () => setIsPositiveResults(!isPositiveResults);

    const goBackToTop = () => window.scroll({top: 0, behavior: 'smooth'});

    const handleChangeLanguage = (value) => i18n.changeLanguage(value);

    return (
       <Suspense fallback="Loading...">
           <Div padding={20} column>
               <Select options={languageOptions} onChange={handleChangeLanguage} title={t('chooseLanguage')}/>
               <SectionWrapper column>
                   <Header title="Settings"/>
                   <InputField title={t('howManyTasks')} value={howManyTasks} onChange={handleHowManyTasks} max={100} />
                   <InputField title={t('howManyValuesToCalculate')} value={howManyValues} onChange={handleHowManyValues} max={5} min={2}/>
                   <InputField title={t('maximumSingleValue')} value={maximumSingleValue}
                               onChange={handleMaximumSingleValue}
                               max={10000}/>
               </SectionWrapper>
               <SectionWrapper column>
                   <Header title={t('typeOperations')}/>
                   <InputMathOperators type={t('addition')} value='+' onChange={handleMathOperatorChange}/>
                   <InputMathOperators type={t('subtraction')} value='-' onChange={handleMathOperatorChange}/>
                   <InputMathOperators type={t('multiplication')} value='*' onChange={handleMathOperatorChange}/>
                   <InputMathOperators type={t('division')} value='/' onChange={handleMathOperatorChange}/>
                   <InputMathOperators type={t('positiveResults')} value={isPositiveResults} onChange={handlePositiveResultsChange} disabled={!typeOfMathOperators.includes('-')} checked={isPositiveResults} />
               </SectionWrapper>
               <SectionWrapper>
                   <Button label={t('generateTask')}
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
                       <Button label={isCheckTasksActive ? t('editTask') : t('checkTask')}
                               backgroundColor='silver'
                               onClick={handleCheckTask}
                       />
                       <Button
                           onClick={goBackToTop}
                           label={t('backToTop')}
                           backgroundColor='silver'
                       />
                   </GroupButtonWrapper>
               </BottomSection>
           </Div>
       </Suspense>
    );
}

export default App;
