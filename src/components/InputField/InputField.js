import React from 'react';
import Div from 'styled-kit/Div';

import { Label, Input } from './styles';

function InputField({title}) {
    return (
        <Div padding="5px 0">
            <Label>{title}
                <Input type="number" className="input-value how-many-task"
                       placeholder={title} />
            </Label>
        </Div>
    );
}

export default InputField;