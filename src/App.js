import { Suspense } from "react";
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import i18nConfig from 'translations/i18nConfig'
import 'App.css';
import { TasksList } from "components";
import { LanguageSelector, Settings, Statistics, UserProgress } from "sections";
import { AppWrapper } from "styles";

i18n.use(initReactI18next).init(i18nConfig);

function App() {
    return (
        <Suspense fallback="Loading...">
            <AppWrapper>
                <LanguageSelector/>
                <UserProgress />
                <Settings/>
                <TasksList/>
                <Statistics/>
            </AppWrapper>
        </Suspense>
    );
}

export default App;
