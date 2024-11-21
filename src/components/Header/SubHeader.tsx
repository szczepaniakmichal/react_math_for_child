import React from 'react';
import { SubHeaderWrapper} from "./styles";

type Props = {
    title: string,
    value?: string,
}

const SubHeader: React.FC<Props> = ({title = '', value = ''}) => {
    return <SubHeaderWrapper>{title}: {value}</SubHeaderWrapper>;
}

export default SubHeader;