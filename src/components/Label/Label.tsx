import React from 'react';
import {LabelWrapper} from "./styles";

type LabelProps = {
    title: string,
}

const Label: React.FC<LabelProps> = ({title = ''}) => {
    return <LabelWrapper>{title}</LabelWrapper>;
}

export default Label;