import React from 'react';
import { HeaderWrapper } from "./styles";

function Header({title, value}) {
    return <HeaderWrapper>{title}: {value}</HeaderWrapper>;
}

export default Header;