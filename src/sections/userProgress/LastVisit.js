import React from 'react';
import { useTranslation } from "react-i18next";
import { Label } from "components";
import { getDaysBetweenDates, getSessionKey } from "utils";
import { BorderWrapper } from 'styles';
import { InfoPresenter } from "sections/userProgress/styles";
import IconPresenter from "sections/userProgress/IconPresenter";
import DatePresenter from "sections/userProgress/DatePresenter";

function LastVisit() {
    const { t } = useTranslation();

    const lastVisitDate = getSessionKey('lastWorkDate');
    const datesDistance = getDaysBetweenDates(lastVisitDate);
    const translation = lastVisitDate ? 'lastVisit' : 'welcomeFirstTime'

    return (
        <BorderWrapper>
            <InfoPresenter>
                <Label title={t(translation)}/>
                <IconPresenter {...{ lastVisitDate, datesDistance }} />
                <DatePresenter title={lastVisitDate}/>
            </InfoPresenter>
        </BorderWrapper>
    )

}

export default LastVisit;