import React from 'react';
import {SubLabelWrapper} from "./styles";

type Props = {
    title: string,
}

const SubLabel: React.FC<Props> = ({title = ''}) => {
    return <SubLabelWrapper>{title}</SubLabelWrapper>;
}

export default SubLabel;