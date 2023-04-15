import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Header from "components/Header/Header";
import Option from "./Option";
import { OptionsWrapper, SelectWrapper, Trigger } from "./styles";

Select.propTypes = {
    options: PropTypes.array,
    style: PropTypes.object,
    title: PropTypes.string,
    onChange: PropTypes.func,
}

Select.defaultProps = {
    options: [],
    style: {},
    title: '',
    onChange: () => {},
}

function Select({options, style, title, onChange}) {
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [userChoice, setUserChoice] = useState(options.find(lang => lang.default).label);

    const handleTrigger = () => {
        setOpen(open => !open)
    }

    const handleOption = (value, label) => {
        onChange(value);
        setUserChoice(label);
        setOpen(false)
    }

    return (
        <>
            {title && <Header title={t(title)} />}
            <SelectWrapper>
                <Trigger onClick={handleTrigger}><div>{userChoice}</div></Trigger>
                {open && (
                    <OptionsWrapper className="OptionsWrapper">
                        {options.map(el => <Option key={el.value} {...{el}} onClick={handleOption} />)}
                    </OptionsWrapper>
                    )}

            </SelectWrapper>
        </>



    );
}

export default Select;