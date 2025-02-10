import React from 'react';
import { Icon } from "components";
import iconMoodConfig from "configs/iconMoodConfig";

function IconPresenter({lastVisitDate, datesDistance}) {
    if (!lastVisitDate) return lastVisitDate;

    const { icon, color } = iconMoodConfig(datesDistance);

    return (
        <Icon {...{ icon, color }} size={36} />
    );
}

export default IconPresenter;