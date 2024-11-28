import { Suspense } from "react";
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import 'App.css';
import { TasksList } from "components";
import { LanguageSelector, Settings, Statistics } from "sections";
import i18nConfig from 'translations/i18nConfig'
import { AppWrapper } from "styles";

i18n.use(initReactI18next).init(i18nConfig);

function App() {
    return (
        <Suspense fallback="Loading...">
            <AppWrapper>
                <LanguageSelector/>
                <Settings/>
                <TasksList/>
                <Statistics/>
            </AppWrapper>
        </Suspense>
    );
}

export default App;
