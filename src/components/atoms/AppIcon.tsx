import * as React from 'react';
import './appIcon.less';

interface AppIconProps {
  icon: string;
  className?: string;
  onClick?: (e: any) => void;
}

export default function AppIcon(props: AppIconProps) {
  const { icon, className, onClick } = props;

  return (
    <svg
      className={`app-icon ${className || ''}`}
      onClick={onClick}
      aria-hidden="true"
    >
      <use xlinkHref={icon} />
    </svg>
  );
}
