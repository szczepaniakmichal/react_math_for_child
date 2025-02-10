import React from 'react';
import { useTranslation } from "react-i18next";
import { Header } from "components";
import { SectionWrapper } from "styles";
import LastVisit from "sections/userProgress/LastVisit";

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