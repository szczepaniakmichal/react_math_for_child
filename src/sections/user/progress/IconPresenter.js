import React from 'react';
import { Icon } from "components";
import iconMoodConfig from "configs/iconMoodConfig";

function IconPresenter({lastWorkDate, datesDistance}) {
    if (!lastWorkDate) return lastWorkDate;

    const { icon, color } = iconMoodConfig(datesDistance);

    return (
        <Icon {...{ icon, color }} size={36} />
    );
}

export default IconPresenter;