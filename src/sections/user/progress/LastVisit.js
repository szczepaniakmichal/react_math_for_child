import React from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Label } from "components";
import { getDaysBetweenDates } from "utils";
import { BorderWrapper } from 'styles';
import { InfoPresenter, LabelWrapper } from "./styles";
import IconPresenter from "./IconPresenter";
import DatePresenter from "./DatePresenter";

function LastVisit() {
    const lastWorkDate = useSelector(({user}) => user.progress.lastWorkDate);
    const datesDistance = getDaysBetweenDates(lastWorkDate);
    const translation = lastWorkDate ? 'lastVisit' : 'welcomeFirstTime';

    return (
        <BorderWrapper>
            <InfoPresenter>
                <LabelPresenter title={translation} {...{ lastWorkDate, datesDistance }}/>
                <IconPresenter {...{ lastWorkDate, datesDistance }} />
                <DatePresenter title={lastWorkDate}/>
            </InfoPresenter>
        </BorderWrapper>
    )

}

export default LastVisit;

function LabelPresenter({title, lastWorkDate, datesDistance}) {
    const { t } = useTranslation();

    return (
        <LabelWrapper>
            <Label title={t(title)} />
            {lastWorkDate && <Label title={t('daysAgo', {datesDistance, count: datesDistance})}/>}
        </LabelWrapper>
    )
}