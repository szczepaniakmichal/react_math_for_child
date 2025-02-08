import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { Input, inputStyles } from "components/InputField/styles";

InputPresenter.propTypes = {

};

function InputPresenter({
                            onChange,
                            placeholder,
                            taskToDo,
                            isCorrect,
                            value,
                            ...props
                        }) {
    const ref = useRef(null);

    const isCheckTasksActive = useSelector(({ statistics }) => statistics.isCheckTasksActive, isEqual);

    return (
        <Input
            {...props}
            {...{ onChange, ref, value }}
            type="number"
            placeholder={placeholder || taskToDo}
            disabled={isCheckTasksActive}
            style={inputStyles({ isCorrect, isCheckTasksActive, ref, value })}
        />
    )
}

export default React.memo(InputPresenter);