import { Suspense } from "react";
import Div from 'styled-kit/Div';
import i18n from 'i18next'
import { initReactI18next } from "react-i18next";
import 'App.css';
import { TasksList } from "components";
import { Settings, Statistics } from "sections";
import i18nConfig from 'translations/i18nConfig'
import { LanguageSelector } from "sections";

i18n.use(initReactI18next).init(i18nConfig)

function App() {
    return (
        <Suspense fallback="Loading...">
            <Div padding={20} column>
                <LanguageSelector />
                <Settings />
                <TasksList/>
                <Statistics />
            </Div>
        </Suspense>
    );
}

export default App;
