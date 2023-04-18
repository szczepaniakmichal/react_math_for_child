import React from 'react';
import { HeaderWrapper } from "./styles";

type Props = {
    title: string,
    value: any,
}

const Header: React.FC<Props> = ({title = '', value = ''}) => {
    return <HeaderWrapper>{title}: {value}</HeaderWrapper>;
}

export default Header;