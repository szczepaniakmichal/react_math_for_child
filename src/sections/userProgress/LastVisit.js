import React from 'react';
import { useTranslation } from "react-i18next";
import { Label } from "components";
import { getDaysBetweenDates, getSessionKey } from "utils";
import { BorderWrapper } from 'styles';
import { InfoPresenter, LabelWrapper } from "sections/userProgress/styles";
import IconPresenter from "sections/userProgress/IconPresenter";
import DatePresenter from "sections/userProgress/DatePresenter";

function LastVisit() {
    const lastVisitDate = getSessionKey('lastWorkDate');
    const datesDistance = getDaysBetweenDates(lastVisitDate);
    const translation = lastVisitDate ? 'lastVisit' : 'welcomeFirstTime';

    return (
        <BorderWrapper>
            <InfoPresenter>
                <LabelPresenter title={translation} {...{ lastVisitDate, datesDistance }}/>
                <IconPresenter {...{ lastVisitDate, datesDistance }} />
                <DatePresenter title={lastVisitDate}/>
            </InfoPresenter>
        </BorderWrapper>
    )

}

export default LastVisit;

function LabelPresenter({title, lastVisitDate, datesDistance}) {
    const { t } = useTranslation();

    return (
        <LabelWrapper>
            <Label title={t(title)} />
            {lastVisitDate && <Label title={t('daysAgo', {datesDistance, count: datesDistance})}/>}
        </LabelWrapper>
    )
}