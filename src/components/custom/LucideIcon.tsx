import React from 'react';
import { icons } from 'lucide-react';

interface LucideIconProps {
  name:string;
  color?: string | null | undefined; 
  size?: string | number | null | undefined;
  className?: string | null | undefined;
  [key: string]: string | number | null | undefined; 
}

const LucideIcon: React.FC<LucideIconProps> = ({ name, color , size, className, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className ? className : ''} color={color} size={size} {...props} />;
};

export default LucideIcon;
