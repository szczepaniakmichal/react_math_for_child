import React from 'react';
import { Button } from "components";
import { useTranslation } from "react-i18next";

function GoToTop() {
    const { t } = useTranslation();
    const goBackToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

    return (
        <Button
            onClick={goBackToTop}
            label={t('backToTop')}
            backgroundColor='silver'
        />
    );
}

export default GoToTop;