import React from 'react';
import { useTranslation } from "react-i18next";
import { Button } from "components";

function GoToTop() {
    const { t } = useTranslation();
    const goBackToTop = () => window.scroll({ top: 0, behavior: 'smooth' });

    return (
        <Button
            onClick={goBackToTop}
            label={t('backToTop')}
        />
    );
}

export default GoToTop;