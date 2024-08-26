import { cn } from '@/lib/utils';
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: string
} 

const MenuIcon: React.FC<WithClassName<IconProps>> = ({ color, className, ...props }) => (
    <svg
        {...props} 
        className={cn('', className)} 
        width={props.width || 24}
        height={props.height || 25}
        viewBox={`0 0 ${props.width || 24} ${props.height || 25}`} 
        fill={color || 'black'} 
        xmlns='http://www.w3.org/2000/svg'
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path stroke={color || 'black'} d="M4 6l16 0" />
        <path stroke={color || 'black'} d="M4 12l16 0" />
        <path stroke={color || 'black'} d="M4 18l16 0" />
    </svg>
);

MenuIcon.displayName = 'Menu';
export default MenuIcon;