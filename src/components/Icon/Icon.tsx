import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    icon: IconProp;
    size?: number;
    color?: string;
    fixedWidth?: boolean;
}

const Icon = ({icon, size = 16, color}: IconProps) => {
    return <FontAwesomeIcon {...{ icon, color }} style={{ fontSize: `${size}px` }} fixedWidth />;
 }

export default Icon;