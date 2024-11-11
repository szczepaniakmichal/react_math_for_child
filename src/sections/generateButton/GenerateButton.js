import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useTranslation } from "react-i18next";
import Button from "components/Button/Button";
import { updateTasks } from "utils/generateTasks";
import { SectionWrapper } from "styles";

function GenerateButton() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { tasks, settings } = useSelector(({ taskList, settings }) => ({
        tasks: taskList.tasks ,
        settings,
    }), isEqual);

    const handleGenerateTasks = () => updateTasks(dispatch, tasks, settings);

    return (
        <SectionWrapper>
            <Button label={t('generateTask')}
                    onClick={handleGenerateTasks}
            />
        </SectionWrapper>
    );
}

export default GenerateButton;