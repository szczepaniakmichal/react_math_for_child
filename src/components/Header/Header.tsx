import React from 'react';
import {HeaderWrapper} from "./styles";

type HeaderProps = {
    title: string,
    value?: string,
}

const Header: React.FC<HeaderProps> = ({title = '', value = ''}) => {
    return <HeaderWrapper>{title}: {value}</HeaderWrapper>;
}

export default Header;