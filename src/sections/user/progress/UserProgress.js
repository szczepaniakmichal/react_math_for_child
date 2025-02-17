import React from 'react';
import { useTranslation } from "react-i18next";
import { Header } from "components";
import { SectionWrapper } from "styles";
import LastVisit from "./LastVisit";

function UserProgress() {
    const { t } = useTranslation();

    return (
        <SectionWrapper>
            <Header title={t('userProgress')}/>
            <LastVisit />
        </SectionWrapper>
    );
}

export default UserProgress;