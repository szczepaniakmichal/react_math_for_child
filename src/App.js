import { Suspense } from "react";
import { useSelector } from "react-redux";
import Div from 'styled-kit/Div';
import isEqual from 'lodash.isequal';
import i18n from 'i18next'
import { initReactI18next, useTranslation } from "react-i18next";
import 'App.css';
import { TasksList } from "components";
import i18nConfig from 'translations/i18nConfig'
import Select from "components/Select/Select";
import { languageOptions } from "translations/options";
import { Settings } from "sections";
import { GoToTop } from "sections";

i18n.use(initReactI18next).init(i18nConfig)

function App() {
    // const dispatch = useDispatch();
    const { t } = useTranslation();

    // const handleCheckTask = () => {
    //     setIsCheckTasksActive(isCheckTasksActive => !isCheckTasksActive);
    //     if ( !isCheckTasksActive && taskList.tasks.length ) {
    //         dispatch(updateChecks());
    //         dispatch(updateCorrectDone(calculateDoneTasks(taskList.tasks)));
    //     }
    // };

    const handleChangeLanguage = (value) => i18n.changeLanguage(value);

    return (
        <Suspense fallback="Loading...">
            <Div padding={20} column>
                <Select options={languageOptions} onChange={handleChangeLanguage} title={t('chooseLanguage')}/>
                <Settings />
                <TasksList/>
                {/*<BottomSection>*/}
                {/*    {isCheckTasksActive && <Statistics/>}*/}
                {/*    <GroupButtonWrapper>*/}
                {/*        <Button label={isCheckTasksActive ? t('editTask') : t('checkTask')}*/}
                {/*                backgroundColor='silver'*/}
                {/*                onClick={handleCheckTask}*/}
                {/*        />*/}
                <GoToTop />
                {/*    </GroupButtonWrapper>*/}
                {/*</BottomSection>*/}
            </Div>
        </Suspense>
    );
}

export default App;
