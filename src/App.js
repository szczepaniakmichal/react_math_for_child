import { Suspense } from "react";
import { useSelector } from "react-redux";
import Div from 'styled-kit/Div';
import isEqual from 'lodash.isequal';
import i18n from 'i18next'
import { initReactI18next, useTranslation } from "react-i18next";
import 'App.css';
import TasksList from "components/TasksList/TasksList";
import { en, pl } from 'translations';
import Select from "components/Select/Select";
import { languageOptions } from "translations/options";
import { Settings } from "sections";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        pl: { translation: pl },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
})

function App() {
    // const dispatch = useDispatch();
    const { t } = useTranslation();
    //
    const taskList = useSelector(({ taskList }) => ({ tasks: taskList.tasks }), isEqual);



    // const handleCheckTask = () => {
    //     setIsCheckTasksActive(isCheckTasksActive => !isCheckTasksActive);
    //     if ( !isCheckTasksActive && taskList.tasks.length ) {
    //         dispatch(updateChecks());
    //         dispatch(updateCorrectDone(calculateDoneTasks(taskList.tasks)));
    //     }
    // };

    const goBackToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

    const handleChangeLanguage = (value) => i18n.changeLanguage(value);

    return (
        <Suspense fallback="Loading...">
            <Div padding={20} column>
                <Select options={languageOptions} onChange={handleChangeLanguage} title={t('chooseLanguage')}/>
                <Settings />

                {/*<SectionWrapper>*/}
                    <TasksList isCheckTasksActive tasks={taskList.tasks}/>
                {/*</SectionWrapper>*/}

                {/*<BottomSection>*/}
                {/*    {isCheckTasksActive && <Statistics/>}*/}
                {/*    <GroupButtonWrapper>*/}
                {/*        <Button label={isCheckTasksActive ? t('editTask') : t('checkTask')}*/}
                {/*                backgroundColor='silver'*/}
                {/*                onClick={handleCheckTask}*/}
                {/*        />*/}
                {/*        <Button*/}
                {/*            onClick={goBackToTop}*/}
                {/*            label={t('backToTop')}*/}
                {/*            backgroundColor='silver'*/}
                {/*        />*/}
                {/*    </GroupButtonWrapper>*/}
                {/*</BottomSection>*/}
            </Div>
        </Suspense>
    );
}

export default App;
