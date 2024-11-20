import React from 'react';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Select } from "components";
import { languageOptions } from "translations/options";

function LanguageSelector() {
    const { t } = useTranslation();

    const handleChangeLanguage = (value) => i18n.changeLanguage(value);

    return <Select options={languageOptions} onChange={handleChangeLanguage}
                   title={t('chooseLanguage')}/>;
}

export default LanguageSelector;